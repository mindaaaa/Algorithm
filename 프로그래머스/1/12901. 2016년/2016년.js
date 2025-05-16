function solution(a, b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let daysPassed = b - 1;
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 0; i < a - 1; i++) {
    daysPassed += month[i];
  }

  const index = (5 + daysPassed) % 7;
  return day[index];
}

