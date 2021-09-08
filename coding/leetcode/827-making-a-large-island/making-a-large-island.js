/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = function (grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const DIRS = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];
  let result = 0;
  let islandID = 2;
  const islandSizes = {};
  // islandSizes[0]=1;
  const islands = [];
  for (let i = 0; i < ROWS; i++) {
    const row = [];
    for (let j = 0; j < COLS; j++) {
      row.push(grid[i][j]);
    }
    islands.push(row);
  }
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (islands[i][j] === 1) {
        // not visited
        // find and fill neighbours;
        // standard bfs
        const queue = [[i, j]];
        let count = 0;
        while (queue.length > 0) {
          const [row, col] = queue.pop();
          islands[row][col] = islandID;
          count++;
          for (let direction of DIRS) {
            const r = row + direction[0];
            const c = col + direction[1];
            if (!(r >= ROWS || r < 0 || c >= COLS || c < 0)) {
              if (islands[r][c] === 1) {
                queue.push([r, c]);
                islands[r][c] = islandID;
              }
            }
          }
        }
        islandSizes[islandID] = count;
        count = 0;
        islandID++;
      }
    }
  }
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (islands[i][j] === 0) {
        const nearByIslands = new Set();
        for (let direction of DIRS) {
          const r = i + direction[0];
          const c = j + direction[1];
          if (!(r >= ROWS || r < 0 || c >= COLS || c < 0) && islands[r][c] !== 0) {
            nearByIslands.add(islands[r][c]);
          }
        }
        const area = Array.from(nearByIslands).reduce((accum, id) => {
          accum += islandSizes[id];
          return accum;
        }, 1);
        if (area > result) {
          result = area;
        }
      } else if (result < islandSizes[islands[i][j]]) {
        result = islandSizes[islands[i][j]];
      }
    }
  }
  return result;
};

module.exports = largestIsland;
