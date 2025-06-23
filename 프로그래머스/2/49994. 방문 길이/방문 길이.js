const direction = {
  U: [-1, 0],
  D: [1, 0],
  R: [0, 1],
  L: [0, -1],
};

function solution(dirs) {
  let answer = 0;
  let row = 0,
    col = 0;
  const visited = new Set();

  for (const d of dirs) {
    const [dy, dx] = direction[d];
    const ny = row + dy;
    const nx = col + dx;

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    const path = `${row},${col}:${ny},${nx}`;
    const reversePath = `${ny},${nx}:${row},${col}`;

    if (!visited.has(path) && !visited.has(reversePath)) {
      visited.add(path);
      visited.add(reversePath);
      answer += 1;
    }

    row = ny;
    col = nx;
  }

  return answer;
}