const { NotImplementedError } = require('../extensions/index.js');

 //const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node{
  constructor(data){
    this.data = data;
    this.right = null;
    this.left = null;
  }
}



class BinarySearchTree {
  constructor(){
    this.RootOfTree = null;
  }

  root() {
    if(this.RootOfTree){
      return this.RootOfTree;
    }else { return null; }
  }

  add(data) {
    this.RootOfTree = addData(this.RootOfTree, data);

    function addData(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchData(this.RootOfTree, data);

    function searchData (node, data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true;
      }
      return node.data > data ?
      searchData(node.left, data):
      searchData(node.right,data);
    }
  }

  find(data) {
    return findData(this.RootOfTree, data)

    function findData(node, data){
      if(!node){
        return node;
      }
      if(node.data === data){
        return node;
      }
      return node.data < data ? findData(node.right, data) :findData(node.left, data);npm 
    }
  }

  remove(data) {
 this.RootOfTree = removeNode(this.RootOfTree, data);

 function removeNode(node, data){
  if(!node){
    return null;
  }
  if(data < node.data){
    node.left = removeNode(node.left, data);
    return node
  }
  else if(node.data < data){
    node.right = removeNode(node.right, data);
    return node
  }
  else{
    if(!node.left && !node.right){
      return null;
    }
  }

  if(!node.left){
    node = node.right;
    return node;
  }

  if(!node.right){
    node = node.left;
    return node;
  }

  let minimalFromRight = node.right;
  while(minimalFromRight.left){
    minimalFromRight = minimalFromRight.left;
  }
  node.data = minimalFromRight.data;
  node.right = removeNode(node.right, minimalFromRight.data);
  return node;
 }
  }

  min() {
    if(!this.RootOfTree){
      return 'no elements in tree';
    }
    let node = this.RootOfTree;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.RootOfTree){
      return 'no elements in tree';
    }
    let node = this.RootOfTree;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};