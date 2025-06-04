function solution(park, routes) {
  let x = -1;
  let y = -1;

  const gameMap = park.map((line, row) => {
    const splitLine = line.split('');
    const col = line.indexOf('S');

    if (col !== -1) {
      x = row;
      y = col;
    }
    return splitLine;
  });

  const dir = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  routes.forEach((route) => {
    const [op, n] = route.split(' ');
    const [dx, dy] = dir[op];

    let canMove = true;
    for (let i = 1; i <= Number(n); i++) {
      const nx = x + dx * i;
      const ny = y + dy * i;

      if (
        nx < 0 ||
        nx >= park.length ||
        ny < 0 ||
        ny >= park[0].length ||
        gameMap[nx][ny] === 'X'
      ) {
        canMove = false;
        break;
      }
    }

    if (canMove) {
      x += dx * Number(n);
      y += dy * Number(n);
    }
  });

  return [x, y];
}