function solution(players, callings) {
  const rank = {};

  players.forEach((player, index) => (rank[player] = index));
  callings.forEach((player) => {
    const idx = rank[player];
    const prev = idx - 1;
    const beforePlayer = players[prev];

    [players[prev], players[idx]] = [players[idx], players[prev]];
    rank[player] = prev;
    rank[beforePlayer] = idx;
  });

  return players;
}