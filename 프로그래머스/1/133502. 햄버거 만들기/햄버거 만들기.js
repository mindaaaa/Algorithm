//   let match = ingredient.join('').match(/1231/);
//   let count = 0;

//   while (match) {
//     ingredient.splice(match.index, 4);
//     count++;
//     match = ingredient.join('').match(/1231/);
//   }
//   return count;

function solution(ingredient) {
  const match = [];
  let count = 0;

  function peek(len) {
    if (
      match[len - 4] === 1 &&
      match[len - 3] === 2 &&
      match[len - 2] === 3 &&
      match[len - 1] === 1
    ) {
      return true;
    }
  }

  for (let i = 0; i < ingredient.length; i++) {
    match.push(ingredient[i]);

    if (peek(match.length)) {
      match.pop();
      match.pop();
      match.pop();
      match.pop();
      count++;
    }
  }

  return count;
}