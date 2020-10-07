class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    } 
    // Insert first node
        insertFirst(data) {
            this.head = new Node(data, this.head);
            this.size++;
        }
    // Insert Last node
        insertLast(data) {
            let node = new Node(data);
            let current;

            // if empty, make head
            if(!this.head) {
                this.head = node;
            } else {
                current = this.head;
                while(current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        }
    // Insert at index
    insertAt(data, index) {
        if(index > 0 && index > this.size) {
            return;
        }

        if(index === 0){
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; //node before index
            count++;
            current = current.next; //node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }
    // get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while(current) {
            if(count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }
        return null;
    }
    // remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        // remove first
        if(index === 0){
            this.head = current.next;
        } else {
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // print list data
    printListData() {
        let current = this.head;

        while(current) {
                console.log(current.data);
                current = current.next;
            }
        }
}

const linkedList = new LinkedList();

linkedList.insertFirst(1);
linkedList.insertFirst(2);
linkedList.insertFirst(3);
linkedList.insertFirst(4);
linkedList.insertFirst(5);
linkedList.insertFirst(6);
linkedList.insertLast(7);
// linkedList.insertAt(8, 8);
// linkedList.removeAt(0);
// linkedList.getAt(1);
// linkedList.clearList();
linkedList.printListData();