/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  cost.push(0);
  /**
   *  SOLUTION TECHNIQUE!
   *  Result[N]= Min(Result[N-1], Result[N-2])
   */
  const minCosts = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    minCosts.push(Math.min(cost[i] + minCosts[i - 1], cost[i] + minCosts[i - 2]));
  }
  return minCosts[minCosts.length - 1];
};

module.exports = minCostClimbingStairs;
