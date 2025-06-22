function isSameCount(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

function solution(want, number, discount) {
  const wantObj = {};
  let answer = 0;

  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let discountObj = {};
  for (let i = 0; i < 10; i++) {
    discountObj[discount[i]] = (discountObj[discount[i]] || 0) + 1;
  }

  if (isSameCount(wantObj, discountObj)) answer += 1;

  for (let i = 10; i <= discount.length; i++) {
    const prev = discount[i - 10];
    discountObj[prev] -= 1;

    if (discountObj[prev] === 0) delete discountObj[prev];

    const curr = discount[i];
    discountObj[curr] = (discountObj[curr] || 0) + 1;

    if (isSameCount(wantObj, discountObj)) answer += 1;
  }

  return answer;
}