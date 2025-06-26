function solution(queue1, queue2) {
  const flat = [...queue1, ...queue2];

  const total = flat.reduce((a, b) => a + b);
  const target = total / 2;

  if (total % 2 !== 0) return -1;

  let sum = queue1.reduce((a, b) => a + b);
  let left = 0;
  let right = queue1.length;

  const maxTurn = (queue1.length + queue2.length) * 2;

  for (let turn = 0; turn < maxTurn; turn++) {
    if (sum === target) return turn;
    else if (sum < target) {
      sum += flat[right];
      right++;
    } else {
      sum -= flat[left];
      left++;
    }
  }
  return -1;
}
