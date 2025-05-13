function solution(numbers) {
  const result = [];
  numbers.forEach((number, index) => {
    for (let i = index + 1; i < numbers.length; i++) {
      result.push(number + numbers[i]);
    }
  });

  return result.filter((v, i) => result.indexOf(v) === i).sort((a, b) => a - b);
}