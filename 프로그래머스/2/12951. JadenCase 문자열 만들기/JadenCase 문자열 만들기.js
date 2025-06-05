function solution(s) {
  let result = '';

  for (let i = 0; s.length > i; i++) {
    const prev = s[i - 1];
    const curr = s[i];

    if (i === 0 || prev === ' ') {
      result += curr.toUpperCase();
    } else {
      result += curr.toLowerCase();
    }
  }

  return result;
}