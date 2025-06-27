function solution(storey) {
  let answer = 0;

  while (storey > 0) {
    const digit = storey % 10;
    if (digit > 5) {
      answer += 10 - digit;
      storey = Math.floor(storey / 10) + 1;
    } else if (digit < 5) {
      answer += digit;
      storey = Math.floor(storey / 10);
    } else {
      answer += 5;
      Math.floor(storey / 10) % 10 >= 5
        ? (storey = Math.floor(storey / 10) + 1)
        : (storey = Math.floor(storey / 10));
    }
  }

  return answer;
}

