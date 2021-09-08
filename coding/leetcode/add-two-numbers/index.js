const addTwoNumbers = require('./add-two-numbers');
const { ListNode } = require('./lib');

/**
 * @param nums
 * @return {ListNode[]}
 */
const createList = (nums) => {
  const parent = new ListNode(nums.pop(), null);
  nums.reduce((prev, curVal) => {
    prev.next = new ListNode(curVal, null);
    return prev.next;
  }, parent);
};

console.log(addTwoNumbers(createList([2, 4, 3]), createList([5, 6, 4])));
console.log(addTwoNumbers(createList([0]), createList([0])));

console.log(addTwoNumbers(createList([9, 9, 9, 9, 9, 9, 9]), createList([9, 9, 9, 9])));
