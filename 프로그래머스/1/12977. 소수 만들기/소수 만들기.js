function solution(nums) {
  let primeCount = 0;
  const allCombinations = [];

  function generatorCombinations(start, selectedNums) {
    if (selectedNums.length === 3) {
      allCombinations.push([...selectedNums]);
      return;
    }

    for (let i = start; i < nums.length; i++) {
      selectedNums.push(nums[i]);
      generatorCombinations(i + 1, selectedNums);
      selectedNums.pop();
    }
  }

  generatorCombinations(0, []);
  const summedCombinations = allCombinations.map((combination) =>
    combination.reduce((acc, curr) => acc + curr, 0)
  );

  function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  summedCombinations.forEach((number) => {
    if (isPrime(number)) primeCount++;
  });

  return primeCount;
}