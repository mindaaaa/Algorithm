function solution(str1, str2) {
  const setA = new Map();
  const setB = new Map();

  for (let i = 0; i < str1.length - 1; i++) {
    const s = str1.toLowerCase();
    const str = s[i] + s[i + 1];
    if (/[a-z]{2}/.test(str)) {
      setA.set(str, (setA.get(str) || 0) + 1);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const s = str2.toLowerCase();
    const str = s[i] + s[i + 1];
    if (/[a-z]{2}/.test(str)) {
      setB.set(str, (setB.get(str) || 0) + 1);
    }
  }

  const elements = new Set([...setA.keys(), ...setB.keys()]);
  let intersectionSize = 0;
  let unionSize = 0;

  for (const e of elements) {
    const countA = setA.get(e) || 0;
    const countB = setB.get(e) || 0;

    intersectionSize += Math.min(countA, countB);
    unionSize += Math.max(countA, countB);
  }

  if (unionSize === 0) return 65536;

  return Math.floor((intersectionSize / unionSize) * 65536);
}