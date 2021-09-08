/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (restaurants, veganFriendly, maxPrice, maxDistance) {
  return restaurants
    .filter(([id, rating, vegan, price, distance]) => {
      if (veganFriendly) {
        return vegan && price <= maxPrice && distance <= maxDistance;
      }
      return price <= maxPrice && distance <= maxDistance;
    })
    .sort(([id1, rating1], [id2, rating2]) => {
      if (rating1 === rating2) {
        return id2 - id1;
      }
      return rating2 - rating1;
    })
    .map(([id]) => {
      return id;
    });
};

module.exports = filterRestaurants;
