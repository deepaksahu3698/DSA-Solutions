class MinHeap {
    constructor(arr) {
        this.heap = [];

        for (let num of arr) {
            this.push(num);
        }
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);

        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);

            if (this.heap[parent] <= this.heap[i]) {
                break;
            }

            [this.heap[parent], this.heap[i]] =
            [this.heap[i], this.heap[parent]];

            i = parent;
        }
    }

    pop() {
        let min = this.heap[0];
        let last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < this.heap.length &&
                    this.heap[left] < this.heap[smallest]) {
                    smallest = left;
                }

                if (right < this.heap.length &&
                    this.heap[right] < this.heap[smallest]) {
                    smallest = right;
                }

                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

                i = smallest;
            }
        }

        return min;
    }
}

class Solution {
    minCost(arr) {
        let minh = new MinHeap(arr);
        let cost = 0;

        while (minh.size() > 1) {
            let a = minh.pop();
            let b = minh.pop();

            let sum = a + b;
            cost += sum;

            minh.push(sum);
        }

        return cost;
    }
}