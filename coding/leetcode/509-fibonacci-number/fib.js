const CALCULATED_FIB = [1, 1];
for (let i = 2; i <= 30; i++) {
  CALCULATED_FIB.push(CALCULATED_FIB[i - 1] + CALCULATED_FIB[i - 2]);
}

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  return CALCULATED_FIB[n];
};

module.exports = fib;
