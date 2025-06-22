function solution(elements) {
  const n = elements.length;
  const doubleArr = [...elements, ...elements];

  const prefixSum = Array(doubleArr.length + 1).fill(0);
  for (let i = 1; i <= doubleArr.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + doubleArr[i - 1];
  }

  const sequenceSet = new Set();

  for (let len = 1; len <= n; len++) {
    for (let start = 0; start < n; start++) {
      const end = start + len;
      const sum = prefixSum[end] - prefixSum[start];
      sequenceSet.add(sum);
    }
  }

  return sequenceSet.size;
}