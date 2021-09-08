const { LinkedList, LinkedListNode, LinkedListUtils } = require('../../data-structures');
const list1 = LinkedListUtils.createList(1, 5, 6, 3);
const list2 = LinkedListUtils.createList(8, 4, 2);

LinkedListUtils.print(list1);
LinkedListUtils.print(list2);

/**
 *
 * @param {LinkedList} list1
 * @param {LinkedList} list2
 */
function addLists(rootA, rootB) {
  const sizeA = LinkedListUtils.size(rootA);
  const sizeB = LinkedListUtils.size(rootB);
  if (sizeA < sizeB) {
    let temp = rootA;
    rootA = rootB;
    rootB = temp;
  }
  let lengthDiff = Math.abs(sizeA - sizeB);
  let offset = rootA;
  let prev = rootA;
  let resultSize = Math.max(sizeA, sizeB);
  while (lengthDiff !== 0) {
    prev = offset;
    offset = offset.next;
    lengthDiff--;
  }

  const sameLenResult = addListsUtil(offset, rootB);
  let carry = 0;
  if (sameLenResult !== null && sameLenResult.data !== null) {
    carry = Math.floor(sameLenResult.data / 10);
    sameLenResult.data = sameLenResult.data % 10;
  }
  let result = processCarry(rootA, prev, carry, sameLenResult);
  if (result.data > 9) {
    let tmp = LinkedListUtils.createNode(Math.floor(result.data / 10));
    result.data = result.data % 10;
    tmp.next = result;
    result = tmp;
    resultSize++;
  }
  return result;
}

function processCarry(root, end, carry, rest) {
  if (root === null) {
    return rest;
  }
  if (root === end) {
    const node = LinkedListUtils.createNode(end.data + carry);
    node.next = rest;
    return node;
  }
  const node = LinkedListUtils.createNode(root.data);
  node.next = processCarry(root.next, end, carry, rest);
  node.data = root.data + Math.floor(node.next.data / 10);
  node.next.data = node.next.data % 10;
  return node;
}

function addListsUtil(root1, root2) {
  if (root1.next === null && root2.next === null) {
    return LinkedListUtils.createNode(root1.data + root2.data);
  } else {
    const node = LinkedListUtils.createNode(root1.data + root2.data);
    node.next = addListsUtil(root1.next, root2.next);
    node.data = root1.data + root2.data + Math.floor(node.next.data / 10);
    node.next.data = node.next.data % 10;
    return node;
  }
}

const result = addLists(list1, list2);
LinkedListUtils.print(result);
