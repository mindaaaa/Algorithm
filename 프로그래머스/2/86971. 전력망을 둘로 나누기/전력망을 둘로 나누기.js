function solution(n, wires) {
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(node, disconnected) {
    let count = 1;
    for (const child of graph[node]) {
      if (child !== disconnected) {
        count += dfs(child, node);
      }
    }
    return count;
  }

  let minDiff = Infinity;
  for (const [a, b] of wires) {
    graph[a].splice(graph[a].indexOf(b), 1);
    graph[b].splice(graph[b].indexOf(a), 1);

    const countA = dfs(a, null);
    const countB = n - countA;

    minDiff = Math.min(minDiff, Math.abs(countA - countB));

    graph[a].push(b);
    graph[b].push(a);
  }

  return minDiff;
}