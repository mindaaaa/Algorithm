function solution(arr1, arr2) {
  let answer = Array.from({ length: arr1.length }, () =>
    Array(arr2[0].length).fill(0)
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }

      answer[i][j] = sum;
    }
  }

  return answer;
}