const filterRestaurants = require('./filter-restaurants');

testCases = [
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    1,
    50,
    10,
  ),
  filterRestaurants(
    [
      [1, 4, 1, 40, 10],
      [2, 8, 0, 50, 5],
      [3, 8, 1, 30, 4],
      [4, 10, 0, 10, 3],
      [5, 1, 1, 15, 1],
    ],
    0,
    50,
    10,
  ),
];

testCases.forEach((res) => {
  console.log(res);
});
