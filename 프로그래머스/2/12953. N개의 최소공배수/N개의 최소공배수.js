function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  return arr.reduce((acc, curr) => lcm(acc, curr));
}