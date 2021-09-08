/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const powerSetSize = Math.pow(2, nums.length);
  for (let i = 0; i < powerSetSize; i++) {
    const arr = [];
    for (let j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) != 0) {
        arr.push(nums[j]);
      }
    }
    result.push(arr);
  }
  return result;
};

module.exports = subsets;
