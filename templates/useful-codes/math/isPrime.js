function isPrime(num) {
  var x = 2
  while (num > x) {
    if (num % x === 0) {
      return false;
    } else {
      x++;
    }
  }
  return true;
}

console.log(isPrime(5));