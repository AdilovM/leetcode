class LinkedListNode{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
};

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  prepend(value){
    let newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    if(!this.tail){
      this.tail = newNode;
    }
    return this;
  }

  append(value){
    let newNode = new LinkedListNode(value);
    if(!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  find(value){
    if(!this.head) {
      return null;
    } else {
      let current = this.head;
      while(current){
        if(value !== undefined && current.value === value){
          return current;
        }
        current = current.next;
      }
      return null;
    }
  }

  delete(value){
    if(!this.head) {
      return null;
    } else {
      let current = this.head;
      let deletedNode = null;
      while(current){
        if(current.next.value === value){
          deletedNode = current.next;
          current.next = current.next.next;
          return deletedNode;
        }
        current = current.next;
      }
      return null;
    }
  }

  reverse(){
    previousNode = null;
    currentNode = this.head;
    nextNode = null;

    while(currentNode){
      /*
      nextNode is next to currentNode
      */
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;

      // increment
      currentNode = nextNode
    }
    this.tail = this.head;
    this.head = previousNode;

    return this;
  }
}