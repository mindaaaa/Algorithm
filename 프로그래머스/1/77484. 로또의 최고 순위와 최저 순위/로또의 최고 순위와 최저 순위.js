function solution(lottos, win_nums) {
  const countMatches = (lotto, winNum) => {
    const lottoSet = new Set(lotto);
    const winNumSet = new Set(winNum);
    return new Set([...winNumSet].filter((num) => lottoSet.has(num))).size;
  };

  const knownMatches = countMatches(lottos, win_nums);
  const unknownCount = lottos.filter((lotto) => lotto === 0).length;

  const matchRange = [knownMatches + unknownCount, knownMatches];
  const getRank = (count) => {
    return count >= 2 ? 7 - count : 6;
  };

  return matchRange.map((count) => getRank(count));
}