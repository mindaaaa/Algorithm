function solution(arr) {
  var answer = [0, 0];

  function compress(row, col, size) {
    const firstItem = arr[row][col];
    let isSame = true;

    for (let i = row; i < row + size; i++) {
      for (let j = col; j < col + size; j++) {
        if (arr[i][j] !== firstItem) {
          isSame = false;
          break;
        }
      }
      if (!isSame) break;
    }

    if (isSame) return (answer[firstItem] += 1);

    const half = size / 2;

    compress(row, col, half);
    compress(row, col + half, half);
    compress(row + half, col, half);
    compress(row + half, col + half, half);
  }

  compress(0, 0, arr.length);
  return answer;
}