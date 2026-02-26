function solution(N, road, K) {
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const [a, b, c] of road) {
        graph[a].push({ to: b, dist: c });
        graph[b].push({ to: a, dist: c });
    }

    const dists = Array(N + 1).fill(Infinity);
    dists[1] = 0;

    const q = [1];

    while (q.length > 0) {
        const current = q.shift();

        graph[current].forEach(next => {
            // 현재까지 거리 + 다음 마을까지 거리 < 기존에 기록된 거리
            if (dists[next.to] > dists[current] + next.dist) {
                dists[next.to] = dists[current] + next.dist;
                q.push(next.to); 
            }
        });
    }

    return dists.filter(d => d <= K).length;
}