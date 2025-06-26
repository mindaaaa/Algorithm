function solution(sequence, k) {
  let answer = [];
  let minLength = Infinity;

  let left = 0;
  let right = 0;
  let sum = sequence[0];

  while (left < sequence.length) {
    if (sum === k) {
      const length = right - left + 1;

      if (length < minLength) {
        minLength = length;
        answer = [left, right];
      }

      sum -= sequence[left];
      left++;
    } else if (sum < k) {
      right++;
      if (right === sequence.length) break;
      sum += sequence[right];
    } else {
      sum -= sequence[left];
      left++;
    }
  }
  return answer;
}