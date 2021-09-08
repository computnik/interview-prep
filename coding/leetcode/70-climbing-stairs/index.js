const climbStairs = require('./climb-stairs');
testCases = [[0], [1], [2], [3], [4], [30]];

testCases.forEach((testCaseArgs) => {
  console.log(climbStairs.call(null, ...testCaseArgs));
});
