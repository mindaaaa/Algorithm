function solution(N, stages) {
  const stageCount = new Array(N + 2).fill(0);
  for (const stage of stages) {
    stageCount[stage]++;
  }

  const roundScore = [];
  let playersCount = stages.length;

  for (let round = 1; round <= N; round++) {
    const current = stageCount[round];
    const failRate = playersCount !== 0 ? current / playersCount : 0;

    roundScore.push({ round, failRate });
    playersCount -= current;
  }

  roundScore.sort((a, b) => {
    if (a.failRate === b.failRate) return a.round - b.round;
    return b.failRate - a.failRate;
  });

  return roundScore.map((score) => score.round);
}