function BoardView() {
}

(function() {
  this.update = function(index, mark) {
    var cell = document.querySelector('[data-index="' + index + '"]');
    cell.innerHTML = '<use xlink:href="#' + mark + '"></use>';
  };

  this.listenForClicks = function() {
    var board = document.querySelector('[data-id="board"]');
    board.addEventListener("click", this.placeMark, false);
  };

  this.placeMark = function(e) {
    if (aCellWasClicked(e)) {
      e.target.setAttribute("data-clicked", "true");
      e.target.innerHTML = '<use xlink:href="#O"></use>';
    };
    e.stopPropagation();
  };

  function aCellWasClicked(e) {
    return e.target !== e.currentTarget && e.target.getAttribute("data-clicked") === "false";
  };

}).call(BoardView.prototype);
