function solution(numbers, target) {
  let sum = 0;
  let count = 0;

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        count++;
      }
      return;
    }

    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, sum);
  return count;
}