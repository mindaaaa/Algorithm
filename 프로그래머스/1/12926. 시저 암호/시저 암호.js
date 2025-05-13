function solution(s, n) {
  return s
    .split('')
    .map((char) => {
      if (char === ' ') return ' ';

      const code = char.charCodeAt(0);
      const base = code >= 97 ? 97 : 65;

      return String.fromCharCode(((code - base + n) % 26) + base);
    })
    .join('');
}