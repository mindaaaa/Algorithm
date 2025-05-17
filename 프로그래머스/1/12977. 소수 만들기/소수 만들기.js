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

  function eratosthenesPrime() {
    const MAX = 3000;
    const isPrime = new Array(MAX + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= MAX; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= MAX; j += i) {
          isPrime[j] = false;
        }
      }
    }

    return isPrime;
  }

  summedCombinations.forEach((number) => {
    if (eratosthenesPrime()[number]) primeCount++;
  });

  return primeCount;
}
