function solution(n) {
  const ternary = n.toString(3);
  const reverseInt = ternary.split('').reverse().join('');

  return parseInt(reverseInt, 3);
}
