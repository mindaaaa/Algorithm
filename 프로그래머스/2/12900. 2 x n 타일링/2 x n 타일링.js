function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
    
  let a = 1;
  let b = 2;
  const MOD = 1_000_000_007;

  for (let i = 3; i <= n; i++) {
    let temp = (a + b) % MOD;
    a = b;
    b = temp;
  }

  return b % 1_000_000_007;
}