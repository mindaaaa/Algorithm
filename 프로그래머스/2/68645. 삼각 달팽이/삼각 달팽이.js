function solution(n) {
  let num = 1;
  let dir = 0;
  const length = (n * (n + 1)) / 2;

  const arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
  let answer = [];

  let x = 0,
    y = 0;
  const dy = [1, 0, -1];
  const dx = [0, 1, -1];

  while (num <= length) {
    arr[y][x] = num;
    num++;

    let ny = y + dy[dir];
    let nx = x + dx[dir];

    if (nx < 0 || ny < 0 || nx >= n || ny >= n || arr[ny][nx] !== 0) {
      dir = (dir + 1) % 3;
      ny = y + dy[dir];
      nx = x + dx[dir];
    }

    y = ny;
    x = nx;
  }

  return arr.flat();
}