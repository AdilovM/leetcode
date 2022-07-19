class LinkedListNode{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

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
    } return this;
  }

  append(value){
    let newNode = new LinkedListNode(value);
    let currentNode = this.head;
    if(!this.head || !this.tail){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    } return this;
  }

  find(value){
    if(value === undefined || !this.head) {
      return null;
    } else {
      let currentNode = this.head;
      while(currentNode){
        if(currentNode.value === value){
          return currentNode;
        }
        currentNode = currenNode.next;
      }
    } return null;
  }

  delete(value){
    if(value === undefined || !this.head || !this.tail) {
      return null;
    } else {
      let currentNode = this.head;
      let deletedNode = null;
      while(currentNode.next){
        if(currentNode.next.value === value){
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        }
        currentNode = currentNode.next;
      }
      return deletedNode;
    }
  }

  deleteHead(){
    if(!this.head){
      return null;
    } else {
      let deletedHead = this.head;
      if(!this.head.next) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return deletedHead;
    }
  }

  deleteTail(){
    if(!this.tail){
      return null;
    } else {
      let deletedTail = this.tail;
      if(this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        let currentNode = this.head;
        while(currentNode.next){
          if(currentNode.next.next = null){
            currentNode.next = null;
          }
          currentNode = currentNode.next;
        }
      }
      return deletedNode;
    }
  }

  fromArray(values){
    values.forEach(value => this.append(value));
  }

  toArray(){
    let nodes = [];
    if(!this.head){
      return nodes;
    } else {
      let currentNode = this.head;
      while(currentNode){
        nodes.push(currentNode);
        currentNode = currentNode.next;
      }
      return nodes;
    }
  }

  reverse(){
    let previousNode = null;
    let currentNode = this.head;
    let nextNode = null;

    while(currentNode){
      //save currentNode.next
      nextNode = currentNode.next;

      // swap
      currentNode.next = previous;
      previous = currentNode;
      // increment
      currenNode = nextNode;
    }
    // swap head and tail
    this.tail = this.head;
    // after while loop previousNode is the last node so we can assign it to this.head
    this.head = previousNode;

    return this;
  }
}