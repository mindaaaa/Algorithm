function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  const result = A.map((v, i) => v * B[i]);

  return result.reduce((acc, curr) => acc + curr, 0);
}