function markToBlocks(currentBoard) {
  const marked = new Set();

  for (let row = 0; row < currentBoard.length - 1; row++) {
    for (let col = 0; col < currentBoard[0].length - 1; col++) {
      const current = currentBoard[row][col];

      if (
        current &&
        current === currentBoard[row + 1][col] &&
        current === currentBoard[row][col + 1] &&
        current === currentBoard[row + 1][col + 1]
      ) {
        marked.add(`${row},${col}`);
        marked.add(`${row + 1},${col}`);
        marked.add(`${row},${col + 1}`);
        marked.add(`${row + 1},${col + 1}`);
      }
    }
  }

  return marked;
}

function dropBlocks(m, n, currentBoard) {
  for (let col = 0; col < n; col++) {
    const stack = [];

    for (let row = 0; row < m; row++) {
      if (currentBoard[row][col] !== null) {
        stack.push(currentBoard[row][col]);
      }
    }

    while (stack.length < m) {
      stack.unshift(null);
    }

    for (let row = 0; row < m; row++) {
      currentBoard[row][col] = stack[row];
    }
  }
}

function solution(m, n, board) {
  let currentBoard = board.map((row) => row.split(''));
  let answer = 0;

  while (true) {
    const marked = markToBlocks(currentBoard);
    if (marked.size === 0) break;

    for (const pos of marked) {
      const [r, c] = pos.split(',').map(Number);
      currentBoard[r][c] = null;
    }

    answer += marked.size;
    dropBlocks(m, n, currentBoard);
  }

  return answer;
}