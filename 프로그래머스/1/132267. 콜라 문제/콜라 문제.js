function solution(a, b, n) {
  let sum = 0;

  while (n >= a) {
    const service = Math.floor(n / a) * b;
    sum += service;

    n = service + (n % a);
  }

  return sum;
}