function solution(topping) {
  let answer = 0;
  const brotherMap = new Map();
  const cheolsooMap = new Map();

  for (const t of topping) {
    brotherMap.set(t, (brotherMap.get(t) || 0) + 1);
  }

  for (const t of topping) {
    cheolsooMap.set(t, (cheolsooMap.get(t) || 0) + 1);
    brotherMap.set(t, brotherMap.get(t) - 1);
    if (brotherMap.get(t) === 0) brotherMap.delete(t);

    if (brotherMap.size === cheolsooMap.size) answer += 1;
  }

  return answer;
}