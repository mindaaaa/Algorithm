function solution(survey, choices) {
  // const socre = Math.abs(4 - choices);
  const scoreBoard = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  const mbti = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];

  const count = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  let result = '';

  survey.forEach((my_mbti, index) => {
    const select = choices[index];

    if (select <= 3) {
      count[my_mbti[0]] += scoreBoard[select];
    } else if (select >= 5) {
      count[my_mbti[1]] += scoreBoard[select];
    }
  });

  for (const [first, second] of mbti) {
    if (count[first] > count[second]) {
      result += first;
    } else if (count[first] < count[second]) {
      result += second;
    } else {
      result += [first, second].sort((a, b) => a.localeCompare(b))[0];
    }
  }

  return result;
}