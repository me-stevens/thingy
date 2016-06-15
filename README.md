# JS Tic-Tac-Toe

A web-based Tic-Tac-Toe entirely made with SVG and JavaScript.

It uses **SVG sprites** for the marks, and manipulates the SVG DOM through JavaScript methods from the SVG namespace. These methods and the document specs change slightly from HTML, so for example, to access an element inside the SVG with JavaScript, one must provide the right namespace:

```javascript
// Uses the SVG namespace:
svg.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'use')[0];
// Uses the xlink namespace:
use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + mark);
```


## About

This project uses the [HTML5 Boilerplate](https://html5boilerplate.com/), [Gulp](http://gulpjs.com/) for builds and tasks automation and [Jasmine](http://jasmine.github.io/) for JavaScript tests. You can run the site locally at localhost:4000 using [Browsersync](https://www.browsersync.io/). Check [their guide](https://www.browsersync.io/docs/gulp/) out.

## Installation

### Requirements

Install gulp with npm:

```bash
$ npm install -g gulp
```

### Download

Clone this repository and install dependencies:

```bash
$ git clone https://github.com/me-stevens/js-ttt.git
$ cd js-ttt
$ npm install
```

### Run tasks

```bash
$ gulp
$ gulp watch
```

### Run tests

Open the `dev/js/SpecHelper.html` file in a browser.

### Run site

Type:

```bash
$ gulp server
```

and open `localhost:4000` in a browser.

## License

[![License](https://img.shields.io/badge/gnu-license-green.svg?style=flat)](https://opensource.org/licenses/GPL-2.0)
GNU License
