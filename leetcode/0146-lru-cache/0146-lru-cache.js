class Node{
    constructor(key,value){
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}



/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.map = new Map()

    this.head = new Node(-1,-1)
    this.tail = new Node(-1,-1)

    this.head.next = this.tail
    this.head.prev = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.addNode = function(node){
    let firstNode = this.head.next;

    this.head.next = node
    node.prev = this.head

    node.next = firstNode
    firstNode.prev = node
} 

LRUCache.prototype.removeNode = function(node){
    let prevNode = node.prev
    let nextNode = node.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
}
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)){
        return -1
    }
    let node = this.map.get(key)
    this.removeNode(node)
    this.addNode(node)
    return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.map.has(key)){
        let node = this.map.get(key)
        node.value = value
        this.removeNode(node)
        this.addNode(node)
        return
    }
    let node = new Node(key,value)
    this.map.set(key,node)
    this.addNode(node)

    if(this.map.size > this.capacity){
        let lru = this.tail.prev
        this.removeNode(lru)
        this.map.delete(lru.key)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */