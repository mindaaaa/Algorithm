function solution(brown, yellow) {
  const total = brown + yellow;
  const arr = [];

  for (let row = 3; row <= total; row++) {
    if (total % row !== 0) continue;
    const col = total / row;
    if (row < col) continue;

    if ((row - 2) * (col - 2) === yellow) {
      return [row, col];
    }
  }
}
