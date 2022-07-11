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

  delete(value) {
    let deletedNode = null;
    while(this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }
    let current = this.head;
    if(current) {
      while(current.next) {
        if(current.next.value === value) {
          deletedNode = current.next;
          current.next = current.next.next;
        } else {
          current = current.next;
        }
      }
    }
    if (this.tail && this.tail.value === value) {
      this.tail = current;
    }
    return deletedNode;
  }
}

let n = new LinkedList();
n.prepend(5);
n.prepend(6);
n.append(7);
n.append(8);
// n.delete(7);
// let temp = n.head;
// while(temp) {
//   console.log(temp.value);
//   temp = temp.next;
// }

console.log(n.delete(7));

