function solution(n, arr1, arr2) {
  const command = arr1.map((value, index) => value | arr2[index]);

  return command.map((num) => {
    return num
      .toString(2)
      .padStart(n, '0')
      .replace(/1/g, '#')
      .replace(/0/g, ' ');
  });
}