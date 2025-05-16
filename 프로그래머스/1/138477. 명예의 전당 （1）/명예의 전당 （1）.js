class MinHeap {
  constructor() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  extract() {
    if (this.heap.length <= 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  _heapifyUp() {
    let idx = this.heap.length - 1;
    const inserted = this.heap[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];

      if (parent <= inserted) break;

      this.heap[idx] = parent;
      idx = parentIdx;
    }
    this.heap[idx] = inserted;
  }

  _heapifyDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      const leftIdx = 2 * idx + 1;
      const rightIdx = 2 * idx + 2;
      let smallest = idx;

      if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
        smallest = leftIdx;
      }

      if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
        smallest = rightIdx;
      }

      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      idx = smallest;
    }
  }
}

function solution(k, score) {
  const result = [];
  const hallHeap = new MinHeap();

  for (let i = 0; i < score.length; i++) {
    hallHeap.insert(score[i]);

    if (hallHeap.heap.length > k) {
      hallHeap.extract();
    }

    result.push(hallHeap.peek());
  }

  return result;
}
