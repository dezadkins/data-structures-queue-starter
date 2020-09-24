// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {

}

class Queue {   //FIFO
    constructor(){
        this.store = new Array();
    }

    size() {
        return this.store.length;
    }

    enqueue(ele) {
        this.store.push(ele);
        return true;
        }

    dequeue() {
        return this.store.shift()
    }

    peek() {
        return this.store[0]
    }

}

exports.Node = Node;
exports.Queue = Queue;
