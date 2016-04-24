(function main() {

  var X = marks.X,
      O = marks.O,
      E = marks.E,

      board     = new Board([[E, E, E], [E, E, E], [E, E, E]]),
      boardView = new BoardView();

  boardView.listenForClicks();
})();
