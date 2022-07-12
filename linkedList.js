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
}