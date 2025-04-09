function solution(n, computers) {
  let visited = Array(n).fill(false);
  let count = 0;

  // 네트워크가 몇 개인가?
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  // 어디까지 연결되어있나?
  function dfs(computer) {
    visited[computer] = true;

    for (let i = 0; i < n; i++) {
      if (computers[computer][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  return count;
}