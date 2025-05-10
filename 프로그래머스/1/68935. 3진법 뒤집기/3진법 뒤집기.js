function solution(n) {
  const ternary = [];
  while (n > 0) {
    ternary.push(n % 3);
    n = Math.floor(n / 3);
  }

  // 10 진법 저장
  let result = 0;
  for (let i = 0; i < ternary.length; i++) {
    result += ternary[i] * 3 ** (ternary.length - 1 - i);
  }

  return result;
}