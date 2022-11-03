class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

class LinkedList:
  def __init__(self):
    self.head = None
    self.tail = None
    self.size = 0

  def append(self, value):
    new_node = Node(value)
    if self.head is None or self.tail is None:
      self.head = new_node
      self.tail = new_node
      self.size += 1
    current_node = self.head
    while current_node:
      if current_node == self.tail:
        current_node.next = new_node
        self.size += 1
        self.tail = new_node
        return
      else:
        current_node = current_node.next

  def prepend(self, value):
    new_node = Node(value)
    if self.head is None or self.tail is None:
      self.head = new_node
      self.tail = new_node
      self.size += 1
    new_node.next = self.head
    self.size += 1
    self.head = new_node


  def has_node(self, value):
    if self.head is None or self.tail is None:
      return False
    current_node = self.head
    while current_node:
      if current_node.value == value:
        return True
      current_node = current_node.next
    return False

  def print_nodes(self):
    current_node = self.head
    while current_node:
      current_node = current_node.next
    print('print this because current node is not None')

  def remove_node(self, value):
    if self.head is None or self.tail is None:
      return
    if self.head.value == value:
      self.head = self.head.next
      return
    current_node = self.head
    while current_node:
      if current_node.next == self.tail and current_node.next.value == value:
        self.tail = current_node
        return
      if current_node.next.value == value:
        current_node.next = current_node.next.next
        return
      current_node = current_node.next
    return

  def remove_head(self):
    if self.head is None:
      return
    self.head = self.head.next
    return

  def remove_tail(self):
    if self.tail is None:
      return
    current_node = self.head
    while current_node:
      if current_node.next == self.tail:
        self.tail = current_node
      current_node = current_node.next
      return

  def remove_nth_node(self, n):
    if n > self.size:
      return
    elif self.head is None or self.tail is None:
      return
    elif n == 1:
      self.remove_head()
    elif n == self.size:
      self.remove_tail()
    else:
      i = 1
      current_node = self.head
      while i <= self.size:
        if i == n - 1:
          current_node.next = current_node.next.next
          return
        current_node = current_node.next
        i += 1

