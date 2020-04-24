// The Collatz conjecture is applead to positive integers and speculates that it is always possible to get "back to 1" if you follow these steps:
/*
 * if n is 1,stop.
 * Otherwise, if n is even, repeat this process on n/2.
 * Otherwise if n is odd, repeat this process on 3n + 1.
 */

// Challenge: Write a recursive function collatz(n) that calculates how many steps it takes to get to 1 if you start from n and recurse as indicated above.

// will return 1 + (another recursion which will either return 0 or 1 as well and so on) if still steps to be made, and 0 if it ends up finally being 1.

/**
 * Textually, this recursion looks like this:
 *
 * collatz(25);
 * returns 1 + collatz(76) =>
 * returns 1 + collatz(38) =>
 * returns 1 + collatz(19) =>
 * returns 1 + collatz(57) => and so on...
 * or put simply:
 * returns 1 + 1 + 1 + 1 ... and so on until the base case.
 */

function collatz(num) {
  // base case
  if (num === 1) {
    return 0;
    // even numbers
  } else if (num % 2 === 0) {
    return 1 + collatz(num / 2);
    // odd numbers
  } else {
    return 1 + collatz(3 * num + 1);
  }
}

var result = collatz(25);
console.log(result);
