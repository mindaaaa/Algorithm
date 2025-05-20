function solution(participant, completion) {
  const playerCountMap = new Map();

  participant.forEach((player) => {
    playerCountMap.set(player, (playerCountMap.get(player) || 0) + 1);
  });

  completion.forEach((player) => {
    playerCountMap.set(player, playerCountMap.get(player) - 1);
  });

  for (const [key, value] of playerCountMap) {
    if (value === 1) return key;
  }
}