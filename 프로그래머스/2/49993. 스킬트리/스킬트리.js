function solution(skill, skill_trees) {
  let answer = 0;

  for (const tree of skill_trees) {
    const learned = tree
      .split('')
      .filter((s) => skill.includes(s))
      .join('');

    skill.startsWith(learned) ? answer++ : answer;
  }

  return answer;
}