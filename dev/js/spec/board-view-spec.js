describe("BoardView", function() {

  var boardView, cell, board;

  beforeEach(function() {
    boardView = new BoardView();
  });

  function createCell(index, mark) {
    cell                 = document.createElement("svg");
    cell.dataset.index   = index;
    cell.dataset.clicked = "false";
    cell.innerHTML       = '<use xlink:href="#' + mark + '"></use>';
  };

  function insertCell(index, mark) {
    createCell(index, mark);
    document.body.appendChild(cell);
  };

  function insertBoard(cell) {
    board            = document.createElement("div");
    board.dataset.id = "board";
    board.appendChild(cell);
    document.body.appendChild(board);
  };

  function removeCell() {
    document.body.removeChild(cell);
  };

  function removeBoard() {
    document.body.removeChild(board);
  };

  it("starts the view with an empty cell", function() {
    insertCell(1, marks.E);
    expect(cell.childNodes[0].getAttribute("xlink:href")).toEqual("#E");
    removeCell();
  });

  it("places a mark on the board view", function() {
    insertCell(1, marks.E);
    boardView.update(1, marks.X);
    expect(cell.childNodes.length).toEqual(1);
    expect(cell.childNodes[0].getAttribute("xlink:href")).toEqual("#X");
    removeCell();
  });

  it("cell is unclicked on load", function() {
    createCell(1, marks.E);
    insertBoard(cell);
    boardView.listenForClicks();
    expect(cell.dataset.clicked).toEqual("false");
    removeBoard();
  });

  it("changes the cell state to clicked when clicked", function() {
    createCell(1, marks.E);
    insertBoard(cell);
    boardView.listenForClicks();
    cell.click();
    expect(cell.dataset.clicked).toEqual("true");
    removeBoard();
  });

});
