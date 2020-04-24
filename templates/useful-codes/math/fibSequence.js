// set dynamic variables for the prev num, curr. And one variable for the result.
// starting at 1, get the sum of prev num and curr in a loop by arg num of times.
// each iteration set the prev to current and current to the result.
// then return the result

/** edge cases
 * negative numbers
 * 0 arg num
 * if arg is conditionals
 * NaN
 * null
 */

function fib(num) {
  let prev = 0;
  let curr = 1;
  let result = 0;

  // filters
  if (num < 0 || typeof num !== "number" || isNaN(num)) {
    return null;
  }

  for (let i = 1; i < num; i++) {
    result = prev + curr;
    prev = curr;
    curr = result;
  }

  return result;
}
