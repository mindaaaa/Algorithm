function solution(dartResult) {
  const round = dartResult.match(/(10|[0-9])[SDT][*#]?/g);
  const scores = [];

  round.forEach((item, i) => {
    let score = 0;

    const num = parseInt(item.match(/^(10|[0-9])/)[0]);
    const bonus = item.match(/[SDT]/)[0];
    const optionMatch = item.match(/[*#]/);
    const option = optionMatch ? optionMatch[0] : null;

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