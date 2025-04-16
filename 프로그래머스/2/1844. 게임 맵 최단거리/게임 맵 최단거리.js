function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;

  const visited = Array.from({ length: row }, () => Array(col).fill(false));
  const dist = Array.from({ length: row }, () => Array(col).fill(0));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = [[0, 0]];
  visited[0][0] = true;
  dist[0][0] = 1;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const n = x + dx[i];
      const m = y + dy[i];

      if (n < 0 || m < 0 || n >= row || m >= col) continue;
      if (visited[n][m] || maps[n][m] === 0) continue;

      visited[n][m] = true;
      dist[n][m] = dist[x][y] + 1;
      queue.push([n, m]);
    }
  }
  return dist[row - 1][col - 1] === 0 ? -1 : dist[row - 1][col - 1];
}