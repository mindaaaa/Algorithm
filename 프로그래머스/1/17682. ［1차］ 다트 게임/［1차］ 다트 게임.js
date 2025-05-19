function solution(dartResult) {
  const round = dartResult.match(/(10|[0-9])[SDT][*#]?/g);
  console.log(round);
  const scores = [];

  round.forEach((round, i) => {
    const [, num, bonus, option] = round.match(/(10|\d)([SDT])([*#]?)/);
    let score = Number(num);

    switch (bonus) {
      case 'D':
        score = score ** 2;
        break;
      case 'T':
        score = score ** 3;
        break;
      default:
        score = score ** 1;
    }

    if (bonus === 'S') score = Math.pow(num, 1);
    if (bonus === 'D') score = Math.pow(num, 2);
    if (bonus === 'T') score = Math.pow(num, 3);

    if (option) {
      if (option === '*') {
        score *= 2;
        if (i > 0) scores[i - 1] *= 2;
      }

      if (option === '#') {
        score *= -1;
      }
    }

    scores.push(score);
  });

  return scores.reduce((a, b) => a + b);
}