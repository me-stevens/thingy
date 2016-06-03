var BoardView = {
  boardId: 'board',
  svgNS:   'http://www.w3.org/2000/svg',
  linkNS:  'http://www.w3.org/1999/xlink'
};

BoardView.update = function(cellId, mark) {
  var
    svg = document.getElementById(cellId),
    use = svg.getElementsByTagNameNS(BoardView.svgNS, 'use')[0];
  use.setAttributeNS(BoardView.linkNS, 'xlink:href', '#' + mark);
};

BoardView.setup = function(firstMark) {

  var mark;

  function resetMark() {
    mark = firstMark;
  }

  function aCellWasClicked(e) {
    return e.target !== e.currentTarget &&
           e.target.getAttribute('style') === 'false';
  }

  function markCellAsClicked(e) {
    e.target.setAttribute('style', 'true');
  }

  function updateCellContents(e) {
    BoardView.update(e.target.getAttribute('id'), mark);
  }

  function swapMarks() {
    mark = (mark === marks.X) ? marks.O : marks.X;
  }

  function placeMark(e) {
    if (aCellWasClicked(e)) {
      markCellAsClicked(e);
      updateCellContents(e);
      swapMarks();
    }
    e.stopPropagation();
  }

  function listenForClicks() {
    var board = document.getElementById(BoardView.boardId);
    board.addEventListener('click', placeMark, false);
  }

  resetMark();
  listenForClicks();
};
