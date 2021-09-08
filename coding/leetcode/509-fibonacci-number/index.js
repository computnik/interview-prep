const fib = require('./fib');

testCases = [[0], [1], [2], [3], [4], [30]];

testCases.forEach((testCaseArgs) => {
  console.log(fib.call(null, ...testCaseArgs));
});
