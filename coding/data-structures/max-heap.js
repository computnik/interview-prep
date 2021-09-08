export class MaxHeap {
  values = [];

  constructor() {
    this.values = [];
  }

  parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  leftChild(idx) {
    return idx * 2 + 1;
  }

  rightChild(idx) {
    return idx * 2 + 2;
  }

  isLeaf(idx) {
    return idx >= Math.floor(this.values.length / 2) && idx <= this.values.length - 1;
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]];
  }

  add(element) {
    // add element to the end of the heap
    this.values.push(element);
    // move element up until it's in the correct position
    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(idx) {
    let currentIdx = idx,
      parentIdx = this.parent(currentIdx);

    // while we haven't reached the root node and the current element is greater than its parent node
    while (currentIdx > 0 && this.values[currentIdx] > this.values[parentIdx]) {
      // swap
      this.swap(currentIdx, parentIdx);
      // move up the binary heap
      currentIdx = parentIdx;
      parentIdx = this.parent(parentIdx);
    }
  }

  // removes and returns max element
  extractMax() {
    if (this.values.length < 1) return 'heap is empty';

    // get max and last element
    const max = this.values[0];
    const end = this.values.pop();
    // reassign first element to the last element
    this.values[0] = end;
    // heapify down until element is back in its correct position
    this.heapifyDown(0);

    // return the max
    return max;
  }

  heapifyDown(idx) {
    // if the node at idx has children
    if (!this.isLeaf(idx)) {
      // get indices of children
      let leftChildIdx = this.leftChild(idx),
        rightChildIdx = this.rightChild(idx),
        // start out largest idx at parent idx
        largestIdx = idx;

      // if the left child > parent
      if (this.values[leftChildIdx] > this.values[largestIdx]) {
        // reassign largest idx to left child idx
        largestIdx = leftChildIdx;
      }

      // if the right child > element at largest idx (either parent or left child)
      if (this.values[rightChildIdx] >= this.values[largestIdx]) {
        // reassign largest idx to right child idx
        largestIdx = rightChildIdx;
      }

      // if the largest idx is not the parent idx
      if (largestIdx !== idx) {
        // swap
        this.swap(idx, largestIdx);
        // recursively move down the heap
        this.heapifyDown(largestIdx);
      }
    }
  }

  buildHeap(arr) {
    this.values = arr;
    // since leaves start at floor(nodes / 2) idx, we work from the leaves up the heap
    for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  peek() {
    return this.values[0];
  }

  print() {
    let i = 0;
    while (!this.isLeaf(i)) {
      console.log('PARENT:', this.values[i]);
      console.log('LEFT CHILD:', this.values[this.leftChild(i)]);
      console.log('RIGHT CHILD:', this.values[this.rightChild(i)]);
      i++;
    }
  }
}
