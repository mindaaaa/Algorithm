const matching = {
  ')': '(',
  ']': '[',
  '}': '{',
};

function isMating(str) {
  const stack = [];

  for (const char of str) {
    if (['(', '[', '{'].includes(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== matching[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

function solution(s) {
  const doubled = s + s;
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    const rotated = doubled.slice(i, i + s.length);
    if (isMating(rotated)) answer += 1;
  }

  return answer;
}