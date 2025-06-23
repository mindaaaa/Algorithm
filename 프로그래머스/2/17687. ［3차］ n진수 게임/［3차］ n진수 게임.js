function getString(n, limit) {
  let num = 0;
  let result = '';

  while (result.length < limit) {
    result += num.toString(n).toUpperCase();
    num++;
  }

  return result;
}

function solution(n, t, m, p) {
  const limit = m * t;
  const str = getString(n, limit);
  let answer = '';
  let turn = 0;

  while (answer.length < t) {
    answer += str[p - 1 + turn * m];
    turn++;
  }

  return answer;
}
