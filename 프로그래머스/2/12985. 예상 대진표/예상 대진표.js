function nextUniformNumber(number) {
  return Math.ceil(number / 2);
}

function solution(n, a, b) {
  let round = 0;
  let playerA = a;
  let playerB = b;

  while (playerA !== playerB) {
    playerA = nextUniformNumber(playerA);
    playerB = nextUniformNumber(playerB);
    round += 1;
  }

  return round;
}
