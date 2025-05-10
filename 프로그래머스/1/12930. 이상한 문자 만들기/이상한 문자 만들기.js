function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char))
        .join('')
    )
    .join(' ');
}