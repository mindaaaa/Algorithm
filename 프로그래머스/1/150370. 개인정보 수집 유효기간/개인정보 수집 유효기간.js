function solution(today, terms, privacies) {
  const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);
  const todayInDays = todayYear * 12 * 28 + todayMonth * 28 + todayDay;
  const termDurations = {};

  const result = [];

  terms.forEach((entry) => {
    const [termType, durationInMonths] = entry.split(' ');
    termDurations[termType] = Number(durationInMonths);
  });

  const parsedPrivacies = privacies.map((entry) => {
    const [collectedDate, termType] = entry.split(' ');
    const [collectedYear, collectedMonth, collectedDay] = collectedDate
      .split('.')
      .map(Number);
    const collectedInDays =
      collectedYear * 12 * 28 + collectedMonth * 28 + collectedDay;

    return { collectedInDays, termType };
  });

  parsedPrivacies.forEach(({ collectedInDays, termType }, index) => {
    const validDurationInDays = termDurations[termType] * 28;
    const daysSinceCollection = todayInDays - collectedInDays;

    if (daysSinceCollection >= validDurationInDays) {
      result.push(index + 1);
    }
  });

  return result;
}