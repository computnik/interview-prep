const CALCULATED_TRIB = [1, 1];
for (let i = 3; i <= 37; i++) {
  CALCULATED_TRIB.push(CALCULATED_TRIB[i - 1] + CALCULATED_TRIB[i - 2] + CALCULATED_TRIB[i - 3]);
}

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  return CALCULATED_TRIB[n];
};

module.exports = tribonacci;
