/**
 * Candy Crush
 *
 * This question is about implementing a basic elimination algorithm for Candy Crush.
 *
 * Given a 2D integer array board representing the grid of candy, different positive integers board[i][j]
 * represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j)
 * is empty. The given board represents the state of the game following the player's move.
 *
 * Now, you need to restore the board to a stable state by crushing candies according to the following rules:
 *
 * If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the
 * same time - these positions become empty.
 *
 * After crushing all candies simultaneously, if an empty space on the board has candies on top of itself,
 * then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop
 * outside the top boundary.)
 *
 * After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
 *
 * If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
 * You need to perform the above rules until the board becomes stable, then return the current board.
 *
 * Note:
 * The length of board will be in the range [3, 50].
 * The length of board[i] will be in the range [3, 50].
 * Each board[i][j] will initially start as an integer in the range [1, 2000].
 */

/**
 * @param {number[][]} board
 * @return {number[][]}
 */
const candyCrush = board => {
  const m = board.length;
  const n = board[0].length;
debugger;
  let shouldContinue = false;

  // Crush horizontally
  for (let i = 0; i < m; i++) {//go row wise
    for (let j = 0; j < n - 2; j++) {//go column wise
      const v = Math.abs(board[i][j]);
      if (v && v === Math.abs(board[i][j + 1]) && v === Math.abs(board[i][j + 2])) {
        board[i][j] = board[i][j + 1] = board[i][j + 2] = -v;
        shouldContinue = true;
      }
    }
  }

  // Crush vertically
  for (let i = 0; i < m - 2; i++) {//go row wise
    for (let j = 0; j < n; j++) {//go column wise
      const v = Math.abs(board[i][j]);
      if (v && v === Math.abs(board[i + 1][j]) && v === Math.abs(board[i + 2][j])) {
        board[i][j] = board[i + 1][j] = board[i + 2][j] = -v;
        shouldContinue = true;
      }
    }
  }

  // Drop vertically
  for (let j = 0; j < n; j++) {//coloumn wise
    let row = m - 1; //row will point to location were next item from top need to be copied
    for (let i = m - 1; i >= 0; i--) {//go from last to 1st row
      if (board[i][j] >= 0) {
        //copy +ve number to dropped column postion
        board[row--][j] = board[i][j];
      }
    }
    for (let i = row; i >= 0; i--) {
      //remaining column need to be set to 0
      board[i][j] = 0;
    }
  }

  return shouldContinue ? candyCrush(board) : board;
};

export { candyCrush };
