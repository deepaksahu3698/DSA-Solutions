/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
     let minH = new MinHeap();

    for (let i = 0; i < nums.length; i++) {

        minH.push(nums[i]);

        if (minH.size() > k) {
            minH.pop();
        }
    }

    return minH.top();
};