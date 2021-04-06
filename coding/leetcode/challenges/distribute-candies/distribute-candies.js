/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
function distributeCandies(candies, num_people) {
    const result = new Array(num_people).fill(0);
    // x * (x+1)/2 --> candies => x^2 + x - 2 * candies = 0 => |D| = 1^2 - 4 * 1 * (-2) = 2 + 8 * candies => x1 = (-1 + sqrt(2 + 8 * candies) )/ 2
    let auxiliary_people = Math.floor(Math.sqrt((2 + 8 * candies)) / 2 - 0.5);
    let remaining_candies = candies - (auxiliary_people * (auxiliary_people + 1) / 2);
    let complete_iterations = Math.floor(auxiliary_people / num_people);
    let candies_left = candies;
    // Every person gets
    // Cij = j + i * num_people
    for (let i = 0; i < num_people; i++) {
        let candies_given;
        if (remaining_candies > i + 1) {
            candies_given = (i + 1) * complete_iterations + complete_iterations * (complete_iterations + 1) * num_people / 2;
            // candies_given += i + 1;
            remaining_candies -= candies_given;
        } else {
            candies_given = remaining_candies;
            remaining_candies = 0;
        }
        result[i] = candies_given;
        candies_left -= candies_given
        console.log({i, candies_left, auxiliary_people, remaining_candies, complete_iterations})
    }
    console.log(result);
    return result;
}

function distributeCandiesBruteForce(candies, num_people) {
    const result = new Array(num_people).fill(0);
    let i = 0;
    while (candies > 0) {
        if (candies > i + 1) {
            result[i % num_people] += i + 1;
            candies = candies - i - 1;
        } else {
            result[i % num_people] += candies;
            candies = 0;
        }
        i = (i + 1);
    }
    return result;
}


console.log(distributeCandies(100, 4));
