function solution(clothes) {
  let clothesObj = {};

  for (const item of clothes) {
    const [name, type] = item;

    (clothesObj[type] = clothesObj[type] || []).push(name);
  }

  return (
    Object.values(clothesObj)
      .map((item) => item.length + 1)
      .reduce((acc, curr) => acc * curr) - 1
  );
}