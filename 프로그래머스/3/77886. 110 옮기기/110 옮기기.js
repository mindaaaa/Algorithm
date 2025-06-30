function solution(s) {
  return s.map((item) => {
    const stack = [];
    let count = 0;
    let insertPos = -1;

    for (const char of item) {
      if (
        char === '0' &&
        stack[stack.length - 1] === '1' &&
        stack[stack.length - 2] === '1'
      ) {
        stack.pop();
        stack.pop();
        count += 1;
      } else {
        stack.push(char);
      }
    }

    for (let i = stack.length - 1; i >= 0; i--) {
      if (stack[i] === '0') {
        insertPos = i;
        break;
      }
    }

    const front = stack.slice(0, insertPos + 1).join('');
    const back = stack.slice(insertPos + 1).join('');

    return front + '110'.repeat(count) + back;
  });
}
