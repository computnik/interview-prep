class LinkedListNode {
  data = null;
  next = null;
  constructor(data) {
    this.data = data;
  }
}

class LinkedList {
  /**
   * Start/Head of the LinkedList
   */
  start = null;

  /**
   * Size of the LinkedList
   */
  size = 0;

  /**
   * Default constructor
   */
  constructor(start = null, size = 0) {
    this.size = size;
    this.start = start;
  }

  //   /**
  //    * Adding elements
  //    * @param  {...any} elements
  //    */
  //   addAll(...elements) {
  //     elements.forEach((element) => {
  //       this.start = new LinkedListNode(element);
  //     });
  //   }

  /**
   * Adds a Node to the end of the list
   * @param {LinkedListNode} node Node to be added
   */
  addNode(node) {
    const current = this.start;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    this.size += 1;
  }

  addAll(...elements) {
    if (elements.length > 0) {
      let current;
      for (let i = 0; i < elements.length; i++) {
        if (i === 0) {
          current = new LinkedListNode(elements[i]);
          this.start = current;
        } else {
          current.next = new LinkedListNode(elements[i]);
          current = current.next;
        }
        this.size++;
      }
    }
  }

  /**
   * Creates an element and adds to the list
   * @param {*} data Element's data
   */
  add(data) {
    const node = new LinkedListNode(data);
    this.addNode(node);
  }

  /**
   * Adds a LinkedList Node at a given index
   * @param {LinkedListNode} node
   * @param {number} index
   */
  insertNodeAt(node, index) {
    if (index > 0 && index > this.size) {
      return false;
    }
    if (index === 0) {
      node.next = this.start;
      this.start = node;
    } else {
      let i = 0;
      let cur = this.start.next;
      let prev = this.start;
      while (i < index && cur !== null) {
        i++;
        prev = cur;
        cur = cur.next;
      }
      node.next = cur;
      cur.next = node;
    }
    this.size += 1;
    return true;
  }

  /**
   * Creates a LinkedList Node from data & adds it at a given index
   * @param {*} data
   * @param {number} index
   */
  insertAt(data, index) {
    const node = new LinkedListNode(data);
    this.insertNodeAt(node, index);
  }

  /**
   * This method gets a node at a particular index
   * @param {number} index
   * @returns {LinkedListNode} node at the index
   */
  getNodeAt(index) {
    if (index > 0 && index > this.size) {
      return null;
    }
    if (index === 0) {
      return this.start;
    }
    let i = 0;
    let cur = this.start;
    while (i < index && cur !== null) {
      i++;
      cur = cur.next;
    }
    return cur;
  }

  /**
   * Gets data of a node at a particular index
   * @param {number} index
   * @returns {*} data at the index
   */
  getDataAt(index) {
    const node = this.getNodeAt(index);
    if (node === null) return null;
    return node.data;
  }

  /**
   * This method searches the list for a particular value of data
   * @param {*} data data to search the list for
   * @returns {number} index where the data is found
   */
  indexOf(data) {
    let cur = this.start;
    if (this.size === 0 || data === null) {
      return -1;
    }
    let index = 0;
    while (cur !== null && cur.data !== data) {
      cur = cur.next;
      index++;
    }
    return index;
  }

  toArray() {
    const result = [];
    for (let cur = this.start; cur !== null; cur = cur.next) {
      result.push(cur.data);
    }
    return result;
  }

  print() {
    let list = '';
    let cur;
    for (cur = this.start; cur !== null; cur = cur.next) {
      list = `${list}${cur.data}${cur.next !== null ? '->' : ''}`;
    }
    console.log({ list, size: this.size });
    return list;
  }
}

const LinkedListUtils = {
  createNode: (data) => {
    return { data, next: null };
  },
  createList: (...elements) => {
    if (elements.length <= 0) {
      return null;
    }
    let root, current;
    for (let i = 0; i < elements.length; i++) {
      if (i === 0) {
        current = LinkedListUtils.createNode(elements[i]);
        root = current;
      } else {
        current.next = LinkedListUtils.createNode(elements[i]);
        current = current.next;
      }
    }
    return root;
  },
  appendNode: (root, node) => {
    if (root === null) {
      return node;
    }
    let current = root;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    return root;
  },
  indexOf: (root, data) => {
    let cur = root;
    if (root === null || data === null) {
      return -1;
    }
    let index = 0;
    while (cur !== null && cur.data !== data) {
      cur = cur.next;
      index++;
    }
    return index;
  },
  getNodeAt: (root, index) => {
    if (index > 0 && index > this.size) {
      return null;
    }
    if (index === 0) {
      return root;
    }
    let i = 0;
    let cur = root;
    while (i < index && cur !== null) {
      i++;
      cur = cur.next;
    }
    return cur;
  },
  toArray: (root) => {
    const result = [];
    for (let cur = root; cur !== null; cur = cur.next) {
      result.push(cur.data);
    }
    return result;
  },
  print: (root) => {
    let list = '';
    let cur = root;
    for (cur = root; cur !== null; cur = cur.next) {
      list = `${list}${cur.data}${cur.next !== null ? '->' : ''}`;
    }
    console.log(list);
  },
  size: (root) => {
    let size = 0;
    for (cur = root; cur !== null; cur = cur.next) {
      size++;
    }
    return size;
  },
};

module.exports = { LinkedList, LinkedListNode, LinkedListUtils };
