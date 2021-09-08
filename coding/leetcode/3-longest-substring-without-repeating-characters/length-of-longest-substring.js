/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const arr = new Array(256).fill(-1);
  let result = 0;
  let i = 0;
  if (s.length < 2) {
    return 1;
  }
  while (i < s.length) {
    if (arr[s.charCodeAt(i)] !== -1) {
    }
  }
};

module.exports = lengthOfLongestSubstring;
