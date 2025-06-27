function solution(weights) {
  let answer = 0;
  const pairMap = new Map();
  const ratio = [1, 2 / 3, 1 / 2, 3 / 2, 3 / 4, 4 / 2, 4 / 3];

  for (const w of weights) {
    for (const r of ratio) {
      const pair = w * r;
      if (pairMap.has(pair)) {
        answer += pairMap.get(pair);
      }
    }
    pairMap.set(w, (pairMap.get(w) || 0) + 1);
  }

  return answer;
}