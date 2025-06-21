function solution(k, tangerine) {
  let answer = 0;
  let idx = 0;
  const tangerineCount = {};

  for (const kind of tangerine) {
    tangerineCount[kind] = (tangerineCount[kind] || 0) + 1;
  }

  const sortedCounts = Object.values(tangerineCount).sort((a, b) => b - a);

  while (k > 0) {
    k -= sortedCounts[idx++];
    answer += 1;
  }

  return answer;
}