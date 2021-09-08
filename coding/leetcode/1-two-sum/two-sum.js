/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const set = {};
  let compliment;
  for (let i = 0; i < nums.length; i++) {
    compliment = target - nums[i];
    if (set.hasOwnProperty(compliment)) {
      return [set[compliment], i];
    } else {
      set[nums[i]] = i;
    }
  }
  return null;
};

module.exports = twoSum;
