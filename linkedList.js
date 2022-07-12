class LinkedListNode{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
};

class LinkedList {
  constructor(){
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
    } return this;
  }

  find(value) {
    let current = this.head;
    if(current) {
      while(current) {
        if(value !== undefined && current.value === value) {
          return current;
        } current = current.next;
      } return null;
    }
  }

  delete(value) {
    let current = this.head;
    let deletedNode = null;
    if(current) {
      while(current.next) {
        if(current.next.value === value) {
          deletedNode = current.next;
          current.next = current.next.next;
        }
        current = current.next;
      }
    }
    return deletedNode;
  }

  deleteTail(){
    // no tail = empty LL
    if(!this.tail) {
      return null;
    }
    let deletedNode = this.tail;
    // head = tail => one node
    if(this.head === this.tail) {
      return deletedNode;
    }
    let current = this.head;
    while(current.next) {
      // if one after the next node is null that means the current is the one before the last one
      // point the new last node to null
      if(!current.next.next) {
        current.next = null;
      } else {
        current = current.next;
      }
    }
    // point tail to current.
    this.tail = current;
    // return OG tail
    return deletedNode;
  }

  deleteHead(){
    if(!this.head) {
      return null;
    }
    let deletedHead = this.head;
    if(this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  fromArray(values) {
    values.forEach(value => this.append(value));
    return this;
  }

  toArray(){
    let nodes = [];
    if(!this.head) {
      return nodes;
    } else {
      let current = this.head;
      while(current) {
        nodes.push(current);
        current = current.next;
      }
      return nodes;
    }
    return nodes;
  }

  toString(cb) {
    return this.toArray().map(node => node.toString(cb)).toString();
  }

  reverse(){
    let current = this.head;
    let previousNode = null;
    let nextNode = null;

    while(current) {
      nextNode = current.next;
      current.next = previousNode;
      previousNode = current;
      current = nextNode;
      this.head = this.tail;
      this.head = previousNode;

      return this;
    }
  }
}