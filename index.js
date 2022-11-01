class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; 
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if (value === current.value) return 'value equal';
        
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return null;

    let current = this.root;
    let found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }

}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(20);
tree.root.right.right = new Node(30);
tree.root.right.right.right = new Node(40);
tree.root.right.right.right.right = new Node(50);

// tree.insert(60);
// tree.insert(70);
//tree.insert(80);
// tree.insert(90);