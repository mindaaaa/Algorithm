function solution(msg) {
  const dict = {};
  let index = 1;

  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(65 + i);
    dict[char] = index++;
  }

  let answer = [];
  let start = 0;

  while (start < msg.length) {
    let end = start + 1;

    while (end <= msg.length && dict[msg.slice(start, end)]) {
      end += 1;
    }

    const idx = msg.slice(start, end - 1);
    answer.push(dict[idx]);

    dict[msg.slice(start, end)] = index++;
    start = end - 1;
  }

  return answer;
}
