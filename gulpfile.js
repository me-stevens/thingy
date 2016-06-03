var autoprefixer = require('gulp-autoprefixer'),
  browsersync  = require('browser-sync').create(),
  concat       = require('gulp-concat'),
  gulp         = require('gulp'),
  sass         = require('gulp-sass'),
  sourcemaps   = require('gulp-sourcemaps'),
  uglify       = require('gulp-uglify'),
  paths        = {
    cssdev:  './dev/sass/main.scss',
    cssdist: './dist/css/',
    jsdev:   [
      './dev/js/src/marks.js',
      './dev/js/src/board.js',
      './dev/js/src/board-view.js',
      './dev/js/plugins.js',
      './dev/js/main.js'
    ],
    jsdist:  './dist/js/'
  };

gulp.task('sass', function() {
  return gulp
    .src(paths.cssdev)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.cssdist));
});

gulp.task('js', function() {
  return gulp
    .src(paths.jsdev)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.jsdist));
});

gulp.task('watch', function() {
  gulp.watch('./dev/sass/*', ['sass']);
  gulp.watch(paths.jsdev,    ['js']);
  gulp.watch('./dev/sass/*', browsersync.reload);
  gulp.watch(paths.jsdev,    browsersync.reload);
});

gulp.task('server', function() {
  browsersync.init({
    server: {
      baseDir: './dist',
      routes: {
        '/test' : './dev/js'
      }
    },
    port:   4000,
    notify: false,
    open:   false
  });
});

gulp.task('default', ['sass', 'js', 'watch', 'server']);
