class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }


    add(elem) {
        this.node = new Node(elem);
        if (this.head === null) {
            this.head = this.node;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = this.node;

        }

        this.length++;
    }

    remove(element) {
        let currentNode = this.head;
        let previousNode;
        if (currentNode.element === element) {
            this.head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    isEmpty() {
        return this.length === 0;
    }


    search(idx) {
        let currentNode = this.head;
        let iterator = 0;
        while (iterator < idx) {
            if (currentNode.next) {
                currentNode = currentNode.next;
                iterator++;
            } else {
                return `there is no element with id=${idx}`;
            }
        }
        return currentNode.element;

    }

}