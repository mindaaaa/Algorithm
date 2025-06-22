function solution(numbers) {
  const n = numbers.length;
  const answer = [];
  const stack = [];

  for (i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= numbers[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      answer.push(-1);
    } else {
      answer.push(stack[stack.length - 1]);
    }

    stack.push(numbers[i]);
  }

  return answer.reverse();
}