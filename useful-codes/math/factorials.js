// factorial of a number gets the the product of the number and all the numbers below it.
// e.g. factorial(5) = 5 * 4 * 3 * 2 * 1
// factrial of 0 = 1

function factorial(num) {
  let product = 1;
  // skipped 0 and 1 for unnecessary iteration. since 1 * 1 is equals to 1, and 0 * 1 is equals to 0 which is incorrect factorial of 0.
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}

function factorial2(num) {
  let product = 1;
  while (num > 0) {
    product *= num;
    num--;
  }
  return product;
}

// using recursion
function rFactorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  } else {
    return num * rFactorial(num - 1);
  }
}
