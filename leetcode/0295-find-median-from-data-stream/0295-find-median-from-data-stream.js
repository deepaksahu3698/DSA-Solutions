
var MedianFinder = function() {
    this.maxh = new MaxHeap()
    this.minH = new MinHeap()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxh.push(num)
    this.minH.push(this.maxh.pop())

    if(this.minH.size()> this.maxh.size()){
        this.maxh.push(this.minH.pop())
    }
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.minH.size()< this.maxh.size()){
        return this.maxh.root()
    }

    return (this.maxh.root() + this.minH.root()) /2
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */