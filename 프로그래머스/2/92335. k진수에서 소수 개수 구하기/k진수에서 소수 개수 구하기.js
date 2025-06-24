function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const sqrt = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  const digitNum = n.toString(k);
  const arr = digitNum.split('0');

  return arr.filter((v) => {
    if (!v) return false; 
    const num = parseInt(v, 10);
    return isPrime(num);
  }).length;
}