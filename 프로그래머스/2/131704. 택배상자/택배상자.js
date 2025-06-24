function solution(order) {
  const n = order.length;
  const stack = [];

  let turn = 0;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (order[turn] === i) {
      answer += 1;
      turn += 1;

      while (stack.length && order[turn] === stack[stack.length - 1]) {
        stack.pop();
        answer += 1;
        turn += 1;
      }
    } else {
      stack.push(i);
    }
  }

  return answer;
}