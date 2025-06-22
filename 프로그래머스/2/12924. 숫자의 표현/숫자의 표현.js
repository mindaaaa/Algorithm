function solution(n) {
  let answer = 0;

  for (let k = 1; (k * (k - 1)) / 2 < n; k++) {
    const x = (n - (k * (k - 1)) / 2) / k;
    if (Number.isInteger(x)) {
      answer += 1;
    }
  }

  return answer;
}