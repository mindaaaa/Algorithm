const d1 = [[-1, 0], [0, -1], [1, 0], [0, 1]];
const d2 = [[-2, 0], [0, -2], [2, 0], [0, 2]];
const d3 = [[-1, -1], [-1, 1], [1, -1], [1, 1]];

function solution(places) {
    return places.map((waitingRoom) => {
        const candidates = [];
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (waitingRoom[row][col] === 'P') candidates.push([row, col]);
            }
        }

        const isViolated = (directions, checkLogic) => {
            for (const [x, y] of candidates) {
                for (const [dx, dy] of directions) {
                    const nx = x + dx;
                    const ny = y + dy;

                    if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;

                    if (waitingRoom[nx][ny] === 'P' && checkLogic(x, y, nx, ny, dx, dy)) {
                        return true; 
                    }
                }
            }
            return false; 
        };
        
        if (isViolated(d1, () => true)) return 0;
        if (isViolated(d2, (x, y, nx, ny) => waitingRoom[(x + nx) / 2][(y + ny) / 2] === 'O')) return 0;
        if (isViolated(d3, (x, y, nx, ny) => waitingRoom[x][ny] === 'O' || waitingRoom[nx][y] === 'O')) return 0;

        return 1; 
    });
}