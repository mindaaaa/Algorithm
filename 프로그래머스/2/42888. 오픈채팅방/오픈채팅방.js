function solution(record) {
  const userName = {};
  const logs = [];
  let answer = [];

  for (const r of record) {
    const [command, userId, name] = r.split(' ');

    if (command !== 'Leave') {
      userName[userId] = name;
    }
    if (command !== 'Change') {
      logs.push([command, userId]);
    }
  }

  for (const log of logs) {
    const [command, userId] = log;

    if (command === 'Enter') {
      answer.push(`${userName[userId]}님이 들어왔습니다.`);
    } else {
      answer.push(`${userName[userId]}님이 나갔습니다.`);
    }
  }

  return answer;
}