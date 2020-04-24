// Generates random num inclusive of the given min and max integer
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generates random num from 1 to the given maximum integer
function getRandomNumber(max) {
  return Math.floor(Math.random() * max + 1);
}

// Generates random num from 0 to the given maximum integer
function getRandomWholeNumber(max) {
  return Math.floor(Math.random() * max);
}
