function solution(numbers, hand) {
  const keypad = new Map();
  keypad.set(1, [0, 0]);
  keypad.set(2, [0, 1]);
  keypad.set(3, [0, 2]);
  keypad.set(4, [1, 0]);
  keypad.set(5, [1, 1]);
  keypad.set(6, [1, 2]);
  keypad.set(7, [2, 0]);
  keypad.set(8, [2, 1]);
  keypad.set(9, [2, 2]);
  keypad.set('*', [3, 0]);
  keypad.set(0, [3, 1]);
  keypad.set('#', [3, 2]);

  const leftRegex = /[147]/;
  const rightRegex = /[369]/;

  let leftHand = keypad.get('*');
  let rightHand = keypad.get('#');

  let leftDistance = 0;
  let rightDistance = 0;
  let keySelect;

  return numbers
    .map((number) => {
      if (leftRegex.test(number)) {
        leftHand = keypad.get(number);
        return 'L';
      }

      if (rightRegex.test(number)) {
        rightHand = keypad.get(number);
        return 'R';
      }

      keySelect = keypad.get(number);
      leftDistance =
        Math.abs(leftHand[0] - keySelect[0]) +
        Math.abs(leftHand[1] - keySelect[1]);
      let rightDistance =
        Math.abs(rightHand[0] - keySelect[0]) +
        Math.abs(rightHand[1] - keySelect[1]);

      if (leftDistance > rightDistance) {
        rightHand = keypad.get(number);
        return 'R';
      }

      if (rightDistance > leftDistance) {
        leftHand = keypad.get(number);
        return 'L';
      }

      if (leftDistance === rightDistance) {
        if (hand === 'right') {
          rightHand = keypad.get(number);
          return 'R';
        }
        leftHand = keypad.get(number);
        return 'L';
      }
    })
    .join('');
}