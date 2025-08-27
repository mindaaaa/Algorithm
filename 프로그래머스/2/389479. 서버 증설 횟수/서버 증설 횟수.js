function solution(players, m, k) {
    const servers = Array.from({ length: players.length }, () => 0);
    let answer = 0;

    for (let i = 0; i < players.length; i++) {
        const capacityPlayers = servers[i] * m;
        const requiredPlayers = players[i];

        if (capacityPlayers < requiredPlayers) {
            const count = Math.floor((requiredPlayers - capacityPlayers) / m);

            for (let j = i; j < i + k && j < players.length; j++) {
                servers[j] += count;
            }

            answer += count;
        }
    }

    return answer;
}
