function solution(s) {
  const map = new Map(
    [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ].map((word, idx) => [word, idx])
  );

  let result = '';
  let str = '';

  for (const char of s) {
    if (!isNaN(char)) {
      result += char;
      str = '';
      continue;
    }

    str += char;

    if (map.has(str)) {
      result += map.get(str);
      str = '';
    }
  }

  return Number(result);
}