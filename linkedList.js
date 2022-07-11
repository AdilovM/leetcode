class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    let newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if(!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
}


