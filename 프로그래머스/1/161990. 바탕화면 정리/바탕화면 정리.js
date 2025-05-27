function solution(wallpaper) {
  let lux = Infinity;
  let luy = Infinity;
  let rux = -1;
  let ruy = -1;

  for (let row = 0; row < wallpaper.length; row++) {
    for (let col = 0; col < wallpaper[0].length; col++) {
      if (wallpaper[row][col] === '#') {
        lux = Math.min(row, lux);
        luy = Math.min(col, luy);
        rux = Math.max(row + 1, rux);
        ruy = Math.max(col + 1, ruy);
      }
    }
  }
  return [lux, luy, rux, ruy];
}