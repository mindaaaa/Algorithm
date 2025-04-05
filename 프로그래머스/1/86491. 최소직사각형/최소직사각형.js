function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  for (let [w, h] of sizes) {
    const [minSide, maxSide] = w < h ? [w, h] : [h, w];
    maxW = Math.max(maxW, minSide);
    maxH = Math.max(maxH, maxSide);
  }

  return maxW * maxH;
}