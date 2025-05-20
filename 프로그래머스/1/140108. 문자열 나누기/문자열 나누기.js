function solution(s) {
  let splitCount = 0;
  let currentIndex = 0;

  while (currentIndex < s.length) {
    let baseChar = s[currentIndex];
    let baseCount = 0;
    let othersCount = 0;

    for (let i = currentIndex; i < s.length; i++) {
      if (s[i] === baseChar) {
        baseCount++;
      } else {
        othersCount++;
      }

      if (baseCount === othersCount) {
        splitCount++;
        currentIndex = i + 1;
        break;
      }

      if (i === s.length - 1) {
        splitCount++;
        currentIndex = s.length;
      }
    }
  }

  return splitCount;
}