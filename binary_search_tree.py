class BST:
  def __init__(self, data):
    self.data = data
    self.left = None
    self.right = None
    # we can create a node inside BST just by passing a value of the node

  def add_node(self, data):
    if data == self.data:
      return
    if data < self.data:
      if self.left:
        self.left.add_node(data)
      else:
        self.left = BST(data)
    else:
      if self.right:
        self.right.add_node(data)
      else:
        self.right = BST(data)

  def has_node(self,value):
    if self.data == value:
      return True
    if value < self.data:
      if self.left:
        return self.left.has_node(value)
      else:
        return False

    if value > self.data:
      if self.right:
        return self.right.has_node(value)
      else:
        return False




bst_1 = BST(9)
bst_1.add_node(3)
bst_1.add_node(11)
print(bst_1.left.data)
print(bst_1.right.data)

print(bst_1.has_node(11))

