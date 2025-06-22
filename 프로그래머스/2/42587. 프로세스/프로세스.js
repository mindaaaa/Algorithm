class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const item = this.items[this.front];
    delete this.items[this.front];

    this.front++;
    return item;
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.front];
  }

  isEmpty() {
    return this.rear === this.front;
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  const target = [location, priorities[location]];
  let maxPrior = Math.max(...priorities);

  let answer = 0;

  priorities.forEach((v, idx) => queue.enqueue([idx, v]));

  for (let i = queue.front; i < queue.rear; i++) {
    const [index, value] = queue.items[i];
    if (value < maxPrior) {
      queue.dequeue();
      queue.enqueue([index, value]);
    } else {
      const curr = queue.dequeue();
      answer += 1;

      priorities[priorities.indexOf(maxPrior)] = 0;
      maxPrior = Math.max(...priorities);
      if (curr[0] === target[0]) break;
    }
  }

  return answer;
}