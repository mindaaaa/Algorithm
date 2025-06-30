const d1 = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const d2 = [
  [-2, 0],
  [2, 0],
  [0, -2],
  [0, 2],
  [-1, -1],
  [1, 1],
  [-1, 1],
  [1, -1],
];

function solution(places) {
  const length = 5;

  return places.map((waitingRoom) => {
    const candidates = [];

    for (let row = 0; row < length; row++) {
      const seat = waitingRoom[row];
      // P 자리 위치 만들기
      for (let col = 0; col < length; col++) {
        if (seat[col] === 'P') candidates.push([row, col]);
      }
    }

    // P마다 돌면서 위반 규칙 찾기
    for (const [x, y] of candidates) {
      // P만나면 무조건 false
      for (const [dx, dy] of d1) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || ny < 0 || nx >= length || ny >= length) continue;
        if (waitingRoom[nx][ny] === 'P') return 0;
      }

      // P 사이에 O이면 false
      for (const [dx, dy] of d2) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || ny < 0 || nx >= length || ny >= length) continue;

        if (waitingRoom[nx][ny] === 'P' && (dx === 0 || dy === 0)) {
          const midX = (x + nx) / 2;
          const midY = (y + ny) / 2;

          if (waitingRoom[midX][midY] === 'O') return 0;
        }

        if (waitingRoom[nx][ny] === 'P' && (dx !== 0 || dy !== 0)) {
          const mid1 = [x, ny];
          const mid2 = [nx, y];

          if (
            waitingRoom[mid1[0]][mid1[1]] === 'O' ||
            waitingRoom[mid2[0]][mid2[1]] === 'O'
          )
            return 0;
        }
      }
    }

    return 1;
  });
}
