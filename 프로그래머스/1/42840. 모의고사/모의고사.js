function solution(answers) {
  const correctArray = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const count = new Array(3).fill(0);
  for (let i = 0; i < correctArray.length; i++) {
    answers.forEach((answer, idx) => {
      if (answer === correctArray[i][idx % correctArray[i].length]) {
        count[i]++;
      }
    });
  }

  const maxScore = Math.max(...count);
  //   return count
  //     .map((score, idx) => ({ idx, score }))
  //     .filter(({ score }) => score === maxScore)
  //     .map(({ idx }) => idx + 1)
  //     .sort((a, b) => a - b);
  return count
    .map((score, idx) => (score === maxScore ? idx + 1 : null))
    .filter(Boolean)
    .sort((a, b) => a - b);
}