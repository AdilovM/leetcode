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

  append(value) {
    let newNode = new LinkedListNode(value);
    if(!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
  }
}

// let n = new LinkedList();
// n.prepend(5);
// n.prepend(6);
// n.append(7);
// n.append(8);
// let temp = n.head;
// while(temp) {
//   console.log(temp.value);
//   temp = temp.next;
// }

// console.log(n);

