function solution(numbers) {
  return numbers.map(x => {
    x = BigInt(x);
    if (x % 2n === 0n) {
      return Number(x + 1n);
    } else {
      return Number(x + ((x ^ (x + 1n)) >> 2n) + 1n);
    }
  });
}
