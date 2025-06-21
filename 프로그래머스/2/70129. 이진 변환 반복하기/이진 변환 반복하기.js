function solution(s) {
  let zeroCount = 0;
  let count = 0;

  while (s !== '1') {
    const zero = (s.match(/0/g) || []).length;
    zeroCount += zero;

    s = s.replace(/0/g, '').length.toString(2);
    count += 1;
  }

  return [count, zeroCount];
}