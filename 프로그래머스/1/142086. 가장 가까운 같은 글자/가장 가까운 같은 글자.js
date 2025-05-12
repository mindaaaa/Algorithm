function solution(s) {
  const map = {};
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (map[char] !== undefined) {
      result.push(i - map[char]);
    } else {
      result.push(-1);
    }

    map[char] = i;
  }

  return result;
}
