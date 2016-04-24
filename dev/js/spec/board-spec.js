describe("Board", function() {

  var board,
      E = marks.E,
      X = marks.X,
      O = marks.O;

  it("returns the size of the board", function() {
    board = new Board([
      [E, E, E],
      [E, E, E],
      [E, E, E]
    ]);
    expect(board.size()).toEqual(3);
  });

  it("returns the empty cell indexes", function() {
    board = new Board([
      [X, E, E],
      [E, E, E],
      [E, E, E]
    ]);
    expect(board.emptyCells()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("flattens the board rows", function() {
    board = new Board([
      [E, E, E],
      [E, E, E],
      [E, E, E]
    ]);
    expect(board.flatten()).toEqual([E, E, E, E, E, E, E, E, E]);
  });

  it("transposes the board", function() {
    board = new Board([
      [X, X, X],
      [O, O, E],
      [E, E, E]
    ]);
    transposed = [
      [X, O, E],
      [X, O, E],
      [X, E, E]
    ]
    expect(board.transpose()).toEqual(transposed);
  });

  it("detects a win in a row", function() {
    board = new Board([
      [X, X, X],
      [O, O, E],
      [E, E, E]
    ]);
    expect(board.hasWinner()).toBe(true);
  });

  it("detects a win in a column", function() {
    board = new Board([
      [X, O, E],
      [X, O, E],
      [X, E, E]
    ]);
    expect(board.hasWinner()).toBe(true);
  });

  it("detects a win in a diagonal", function() {
    board = new Board([
      [X, O, O],
      [E, X, E],
      [E, E, X]
    ]);
    expect(board.hasWinner()).toBe(true);
  });

  it("detects a win in an inverse diagonal", function() {
    board = new Board([
      [O, O, X],
      [E, X, E],
      [X, E, E]
    ]);
    expect(board.hasWinner()).toBe(true);
  });

  it("detects a full board", function() {
    board = new Board([
      [X, O, X],
      [O, X, O],
      [O, X, O]
    ]);
    expect(board.isFull()).toBe(true);
  });

  it("if the board is not full, the check for full fails", function() {
    board = new Board([
      [E, E, E],
      [E, E, E],
      [E, E, E]
    ]);
    expect(board.isFull()).toBe(false);
  });

  it("retrieves the content of a cell", function() {
    board = new Board([
      [X, X, X],
      [O, O, E],
      [E, E, E]
    ]);
    expect(board.cell(1)).toEqual(X);
    expect(board.cell(2)).toEqual(X);
    expect(board.cell(3)).toEqual(X);
    expect(board.cell(4)).toEqual(O);
    expect(board.cell(5)).toEqual(O);
    expect(board.cell(6)).toEqual(E);
    expect(board.cell(7)).toEqual(E);
    expect(board.cell(8)).toEqual(E);
    expect(board.cell(9)).toEqual(E);
  });

  it("updates a single cell in the board", function() {
    board = new Board([
      [X, X, X],
      [O, O, E],
      [E, E, E]
    ]);
    updated = new Board([
      [X, X, X],
      [O, O, O],
      [E, E, E]
    ]);
    board.update(6, O);
    expect(board).toEqual(updated);
  });

  it("makes an independent copy of the board", function() {
    board = new Board([
      [X, X, X],
      [O, O, E],
      [E, E, E]
    ]);
    var copy = board.copy();
    copy.update(6, O);
    expect(board).not.toEqual(copy);
  });

});
