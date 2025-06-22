function isOverlap(obj, word) {
  if (obj[word]) {
    return true;
  }

  obj[word] = 1;
  return false;
}

function solution(n, words) {
  const wordsObj = {};
  let lastChar = null;

  for (let idx = 0; idx < words.length; idx++) {
    const word = words[idx];

    if (lastChar && lastChar !== word[0]) {
      return [(idx + 1) % n || n, Math.ceil((idx + 1) / n)];
    }

    if (words[idx].length === 1) {
      return [(idx + 1) % n || n, Math.ceil((idx + 1) / n)];
    }
    if (isOverlap(wordsObj, word)) {
      return [(idx + 1) % n || n, Math.ceil((idx + 1) / n)];
    }

    lastChar = word[word.length - 1];
  }

  return [0, 0];
}