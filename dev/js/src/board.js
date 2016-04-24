function Board(rows) {
  this.rows = rows;
}

(function() {
  this.size = function() {
    return this.rows.length;
  };

  this.emptyCells = function() {
    return this.flatten().map(function(cell, i) {
      if (cell === marks.E) {
        return i;
      }
    }).filter(Number);
  };

  this.flatten = function() {
    return this.rows.reduce(function(previousRow, currentRow) {
      return previousRow.concat(currentRow);
    });
  };

  this.hasWinner = function() {
    return this.winInRows() || this.winInColumns() || this.winInDiagonal() || this.winInInverseDiagonal();
  };

  this.winInRows = function() {
    return this.winInLines(this.rows);
  };

  this.winInColumns = function() {
    return this.winInLines(this.transpose());
  };

  this.winInDiagonal = function() {
    return this.winIn(this.diagonal());
  };

  this.winInInverseDiagonal = function() {
    return this.winIn(this.inverseDiagonal());
  };

  this.winInLines = function(lines) {
    var that = this;
    return lines.some(function(line) {
      return that.winIn(line);
    });
  };

  this.winIn = function(line) {
    return line.every(function(cell) {
      return cell != marks.E && cell == line[0];
    });
  };

  this.transpose = function() {
    var rows = this.rows;
    return rows[0].map(function(column, i) {
      return rows.map(function(row) {
        return row[i];
      })
    });
  };

  this.diagonal = function() {
    return this.rows.map(function(row, i) {
      return row[i];
    });
  };

  this.inverseDiagonal = function() {
    var lastIndex = this.size() - 1;
    return this.rows.map(function(row, i) {
      return row[lastIndex -i];
    });
  };

  this.isFull = function() {
    return this.emptyCells().length === 0;
  };

  this.cell = function(index) {
    return this.rows[this.rowFromIndex(index)][this.columnFromIndex(index)];
  };

  this.update = function(index, mark) {
    this.rows[this.rowFromIndex(index)][this.columnFromIndex(index)] = mark;
  };

  this.rowFromIndex = function(index) {
    return parseInt((index - 1) / this.size(), 10);
  };

  this.columnFromIndex = function(index) {
    return parseInt((index - 1) % this.size(), 10);
  };

  this.copy = function() {
    var rows = this.rows.map(function(row) {
      return row.map(function(cell) {
        return cell;
      });
    });
    return new Board(rows);
  };

}).call(Board.prototype);
