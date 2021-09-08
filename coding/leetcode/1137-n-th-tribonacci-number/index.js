const tribonacci = require('./tribonacci');

testCases = [[0], [1], [2], [3], [4], [30]];

testCases.forEach((testCaseArgs) => {
  console.log(tribonacci.call(null, ...testCaseArgs));
});
