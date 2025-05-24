function solution(numbers, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  const leftKeys = [1, 4, 7];
  const rightKeys = [3, 6, 9];

  let leftHand = keypad['*'];
  let rightHand = keypad['#'];

  let leftDistance = 0;
  let rightDistance = 0;
  let target;

  function getDistance(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  }

  return numbers
    .map((number) => {
      if (leftKeys.includes(number)) {
        leftHand = keypad[number];
        return 'L';
      }

      if (rightKeys.includes(number)) {
        rightHand = keypad[number];
        return 'R';
      }

      target = keypad[number];
      leftDistance = getDistance(leftHand, target);
      rightDistance = getDistance(rightHand, target);

      if (leftDistance > rightDistance) {
        rightHand = keypad[number];
        return 'R';
      }

      if (rightDistance > leftDistance) {
        leftHand = keypad[number];
        return 'L';
      }

      if (leftDistance === rightDistance) {
        if (hand === 'right') {
          rightHand = keypad[number];
          return 'R';
        }
        leftHand = keypad[number];
        return 'L';
      }
    })
    .join('');
}