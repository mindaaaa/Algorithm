function solution(n, lost, reserve) {
  let realLost = lost.filter((student) => !reserve.includes(student));
  let realReserve = reserve.filter((student) => !lost.includes(student));

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  for (let lostStudent of realLost) {
    const idx = realReserve.findIndex(
      (student) => Math.abs(student - lostStudent) === 1
    );
    if (idx !== -1) {
      realReserve.splice(idx, 1);
      realLost = realLost.filter((student) => student !== lostStudent);
    }
  }

  return n - realLost.length;
}