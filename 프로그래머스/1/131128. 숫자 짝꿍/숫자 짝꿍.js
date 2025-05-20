function solution(X, Y) {
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);
  let result = '';

  for (const num of X) countX[num]++;
  for (const num of Y) countY[num]++;

  for (let i = 9; i >= 0; i--) {
    const pairCount = Math.min(countX[i], countY[i]);
    result += String(i).repeat(pairCount);
  }

  if (result === '') return '-1';
  if (result[0] === '0') return '0';

  return result;
}
