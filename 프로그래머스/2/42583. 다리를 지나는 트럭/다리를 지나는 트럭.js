class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
    this.currentTime = 0;
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

  size() {
    return this.rear - this.front;
  }

  getAllWeight() {
    return this.items
      .slice(this.front, this.rear)
      .reduce((acc, curr) => acc + curr.weight, 0);
  }
}

// this.items = {weigth: , enteredAt: }

function solution(bridge_length, weight, truck_weights) {
  let currentTime = 0;
  const queue = new Queue();

  let idx = 0;

  while (idx < truck_weights.length || !queue.isEmpty()) {
    currentTime++;

    if (
      !queue.isEmpty() &&
      currentTime - queue.items[queue.front].enteredAt >= bridge_length
    ) {
      queue.dequeue();
    }

    if (queue.getAllWeight() + truck_weights[idx] <= weight) {
      queue.enqueue({ weight: truck_weights[idx], enteredAt: currentTime });
      idx++;
    }
  }

  return currentTime;
}
