function solution(nums) {
  return Math.min(nums.length / 2, new Set(nums).size);
}