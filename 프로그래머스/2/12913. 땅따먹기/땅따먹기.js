function solution(land) {
  const rows = land.length;
  const cols = land[0].length;

  for (let i = 1; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      land[i][j] += Math.max(...land[i - 1].filter((_, idx) => idx !== j));
    }
  }
  return Math.max(...land[land.length - 1]);
}