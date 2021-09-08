/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const resultSet = new Set();
  const result = [];
  const powerSetSize = Math.pow(2, nums.length);
  nums = nums.sort();
  for (let i = 0; i < powerSetSize; i++) {
    const arr = [];
    for (let j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) != 0) {
        arr.push(nums[j]);
      }
    }
    const arrStr = JSON.stringify(arr);
    resultSet.add(arrStr);
  }
  return Array.from(resultSet).map(JSON.parse);
};

module.exports = subsetsWithDup;
