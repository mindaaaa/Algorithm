const commands = {
  d: [1, 0],
  l: [0, -1],
  r: [0, 1],
  u: [-1, 0],
};

function solution(n, m, x, y, r, c, k) {
  let answer = '';

  function dfs(x, y, depth, path) {
    if (depth === k) {
      if (x === r && y === c) {
        answer = path;
        return true;
      }
      return null;
    }

    for (const [dir, [dx, dy]] of Object.entries(commands)) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 1 || ny < 1 || nx > n || ny > m) continue;

      const distance = Math.abs(r - nx) + Math.abs(c - ny);
      const leftTimes = k - (depth + 1);
      if (distance > leftTimes || (leftTimes - distance) % 2 !== 0) continue;

      if (dfs(nx, ny, depth + 1, path + dir)) return true;
    }
  }

  dfs(x, y, 0, '');
  return answer.length !== 0 ? answer : 'impossible';
}