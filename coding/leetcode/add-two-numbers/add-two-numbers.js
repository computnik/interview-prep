const { ListNode } = require('./lib');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1;
  let p2 = l2;
  let ouput = null,
    parent = null;
  let carry = 0;
  while (p1 !== null && p2 !== null) {
    const val = (p1.val + p2.val + carry) % 10;
    carry = Math.floor((p1.val + p2.val + carry) / 10);
    const node = new ListNode(val, null);
    if (!parent || !output) {
      parent = node;
    } else {
      output.next = node;
    }
    output = node;
    p1 = p1.next;
    p2 = p2.next;
  }
  while (p1 !== null) {
    const val = (p1.val + carry) % 10;
    carry = Math.floor((p1.val + carry) / 10);
    const node = new ListNode(val, null);
    if (!parent || !output) {
      parent = ouput = node;
    } else {
      output.next = node;
    }
    output = node;
    p1 = p1.next;
  }
  while (p2 !== null) {
    const val = (p2.val + carry) % 10;
    carry = Math.floor((p2.val + carry) / 10);
    const node = new ListNode(val, null);
    if (!parent || !output) {
      parent = ouput = node;
    } else {
      output.next = node;
    }
    output = node;
    p2 = p2.next;
  }
  if (carry > 0) {
    output.next = new ListNode(carry);
  }
  return parent;
};
