class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    this.items.push(item);
    this.rear++;
  }

  dequeue() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(x, y, n) {
  const queue = new Queue();
  queue.enqueue([x, 0]);
  const visited = new Set();
  visited.add(x);

  while (!queue.isEmpty()) {
    const [current, count] = queue.dequeue();

    if (current === y) return count;

    const nextList = [current + n, current * 2, current * 3];
    for (const next of nextList) {
      if (next <= y && !visited.has(next)) {
        queue.enqueue([next, count + 1]);
        visited.add(next);
      }
    }
  }

  return -1;
}