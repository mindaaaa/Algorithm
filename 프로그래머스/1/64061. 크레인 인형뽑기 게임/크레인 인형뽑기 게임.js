function solution(board, moves) {
  let bucket = [];
  let count = 0;

  function peek() {
    if (bucket[bucket.length - 2] === bucket[bucket.length - 1]) return true;
  }

  for (let i = 0; i < moves.length; i++) {
    const col = moves[i] - 1;

    for (let row = 0; row < board.length; row++) {
      const target = board[row][col];
      if (target !== 0) {
        bucket.push(target);
        board[row][col] = 0; // 🧨
        if (peek()) {
          bucket.pop();
          bucket.pop();
          count += 2;
        }
        break;
      }
    }
  }

  return count;
}