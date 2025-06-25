function solution(numbers) {
  const result = numbers
    .sort((a, b) => {
      const ab = String(a) + String(b);
      const ba = String(b) + String(a);

      return ba.localeCompare(ab);
    })
    .join('');

  return result[0] === '0' ? '0' : result;
}
