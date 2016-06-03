describe('BoardView', function() {

  var
    board,
    boardId   = BoardView.boardId,
    svgNS     = BoardView.svgNS,
    linkNS    = BoardView.linkNS,
    firstMark = marks.X;

  function idFor(index) {
    return ['cell', index].join('');
  }

  function insertCell(cellId, mark) {
    board = document.getElementById(boardId);
    board.innerHTML = board.innerHTML + [
      '<svg id="', cellId,
      '" style="false" viewBox="0 0 270 270" xmlns="', svgNS,
      '" xmlns:xlink="', linkNS,
      '"><use xlink:href="#', mark,
      '"></use></svg>'
    ].join('');
    return document.getElementById(cellId);
  }

  function removeCell(cell) {
    board.removeChild(cell);
  }

  it('starts the game with empty cells', function() {
    var cell = insertCell(idFor(1), marks.E);
    expect(cell.firstChild.getAttribute('xlink:href')).toEqual('#E');
    removeCell(cell);
  });

  it('places a mark on the board view', function() {
    var cell = insertCell(idFor(1), marks.E);
    BoardView.update(idFor(1), marks.X);
    expect(cell.childNodes.length).toEqual(1);
    expect(cell.childNodes[0].getAttribute('xlink:href')).toEqual('#' + marks.X);
    removeCell(cell);
  });

  it('cell is unclicked on load', function() {
    var cell = insertCell(idFor(1), marks.E);
    BoardView.setup(firstMark);
    expect(cell.getAttribute('style')).toBe('false');
    removeCell(cell);
  });

  it('swaps the initial mark for the opponent mark when clicked', function() {
    var cell = insertCell(idFor(1), marks.E);
    BoardView.setup(firstMark);
    cell.dispatchEvent(createClickEvent());
    expect(cell.firstChild.getAttribute('xlink:href')).toEqual('#' + firstMark);
    removeCell(cell);
  });

  it('changes the cell state to clicked when clicked', function() {
    var cell = insertCell(idFor(1), marks.E);
    BoardView.setup(firstMark);
    cell.dispatchEvent(createClickEvent());
    expect(cell.getAttribute('style')).toBe('true');
    removeCell(cell);
  });

  xit('swaps marks during the game', function() {
    var cell1 = insertCell(idFor(1), marks.E);
    var cell2 = insertCell(idFor(2), marks.E);
    BoardView.setup(firstMark);
    cell1.dispatchEvent(createClickEvent());
    cell2.dispatchEvent(createClickEvent());
    expect(cell1.firstChild.getAttribute('xlink:href')).toEqual('#' + firstMark);
    expect(cell2.firstChild.getAttribute('xlink:href')).toEqual('#' + marks.O);
    removeCell(cell1);
    removeCell(cell2);
  });

  function createClickEvent() {
    return new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
  }

});
