/*
MODULE 2: TESTING
*/

// // ASSERT EQUAL
// function assertEqual(actual, expected, testName) {
//     if (actual === expected) {
//         console.log("passed");
//     } else {
//         console.log("FAILED [" + testName + "] Expected \"" + expected + "\", but got \"" + actual + "\"");
//     }
// }

// // success case
// var multiplyByTwo = function (n) {
//   return n * 2;
// }
// var output1 = multiplyByTwo(2); // returns 4
// assertEqual(output1, 4, 'it doubles 2 to 4');
// // console output:
// // passed

// console.log("");

// // failure case
// var multiplyByTwo = function (n) {
//   return (n * 2) + 1; // an incorrect implementation
// }
// var output2 = multiplyByTwo(2); // returns 5
// assertEqual(output2, 4, 'it doubles 2 to 4');
// // console output:
// // FAILED [it doubles 2 to 4] Expected "4", but got "5"


// function assertArraysEqual(actual, expected, testName) {
//     if (Array.isArray(actual)) {
//         var sameLength = actual.length === expected.length;
//         var sameValues = true;
//         for (let i = 0; i < actual.length; i++) {
//             if (actual[i] !== expected[i]) {
//                 sameValues = false;
//             }
//         }
//         if (sameLength && sameValues) {
//             console.log('passed');
//         } else {
//             console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
//         }
//     }
// }

// assertArraysEqual([1, 1, 2, 3, 8, 13], [1, 1, 2, 3, 5, 8, 13], "compare array to array");
// assertArraysEqual(['b', 'r', 'o', 'k', 'n'], 'broken'.split(''), "splits string into array of characters")

// var person = {
//     firstName: 'Cassidy',
//     lastName: 'Jacobs'
//   };

// var expected = {
//     firstName: 'Joe',
//     lastName: 'Blow',
//     age: 35
// };

// function updateObject(obj, key, value) {
//     obj[key] = value;
//     return obj;
// }

// function assertObjectsEqual(actual, expected, testName) {
//     var actualStr = JSON.stringify(actual);
//     var expectedStr = JSON.stringify(expected);

//     if (actualStr === expectedStr) {
//         console.log("passed");
//     } else {
//         console.log('FAILED [' + testName + '] Expected ' + expectedStr + ', but got ' + actualStr);
//     }
// }

// var output = updateObject(person, 'age', 35)
// assertObjectsEqual(output, expected, "test")


// function assertWithinRange(low, high, actual, testName) {
//     var withinRange = false;
//     if (actual >= low && actual <= high) {
//         withinRange = true;
//     }

//     if (withinRange) {
//         console.log('passed');
//     } else {
//         console.log(`FAILED [${testName}] "${actual}" not within range ${low} to ${high}`);
//     }
// }

// assertWithinRange(1, 100, 101, 'price should be between 1 and 100')


// // Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// // FUNCTION DEFINITION(S)
// function every(array, callbackFunction) {
//     var doesEveryElementMatch = true;
  
//     for (var i = 0; i < array.length; i++) {
//         if (callbackFunction(array[i]) === false) {
//             doesEveryElementMatch = false;
//             break;
//         }
//     }
  
//     return doesEveryElementMatch;
// }
  
// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//     if (actual === expected) {
//         console.log('passed')
//     } else {
//         console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
//     }
// }
// // TESTS CASES
// function callbackFunction(val) {
//     return val > 50;

// }

// var actualTrue = every([56, 72, 91, 69], callbackFunction);
// assertEqual(actualTrue, true, 'should meet callbackFunction condition');
// var actualFalse = every([56, 72, 91, 49], callbackFunction);
// assertEqual(actualFalse, false, 'should not meet callbackFunction condition');


// // FUNCTION DEFINITION(S)
// function map(array, callbackFunction) {
//     var newArray = [];
  
//     for (var i = 0; i < array.length; i++) {
//         newArray.push(callbackFunction(array[i]));
//     }
  
//     return newArray;
// }
  
// function cubeAll(numbers) {
//     return map(numbers, function(n) {
//         return n ** 3;
//     });
// }
  
// // ASSERTION FUNCTION(S) TO BE USED
// function assertArraysEqual(actual, expected, testName) {
//     var sameValues = true;
//     var sameLength = true;

//     if (actual.length !== expected.length) {
//         sameLength = false;
//     } else {
//         for (let i = 0; i < actual.length; i++) {
//             if (actual[i] !== expected[i]) {
//                 sameValues = false;
//                 break;
//             }
//         }
//     }

//     if (sameValues === sameLength) {
//         console.log('passed');
//     } else {
//         console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
//     }
// }
// // TESTS CASES
// function addOne(number) {
//     return number + 1;
// }

// // map function test
// var mapTest = map([1, 2, 3], addOne);
// assertArraysEqual(mapTest, [2, 3, 4], 'should add one to all array elements');

// // cube function test
// var actualPositive = cubeAll([1, 2, 3]);
// assertArraysEqual(actualPositive, [1, 8, 27], 'should return cube of all array elements');
// var actualNegative = cubeAll([-1, -2, -3]);
// assertArraysEqual(actualNegative, [-1, -8, -27], 'should return cube of all negative array elements');
// var actualMixed = cubeAll([1, -2, 3]);
// assertArraysEqual(actualMixed, [1, -8, 27], 'should return cube of all positive and negative array elements');



// // FUNCTION DEFINITION(S)
// function addFullNameProp(obj) {
//     var firstName = obj.firstName;
//     var lastName = obj['lastName'];
  
//     if (firstName && lastName) {
//         obj['fullName'] = firstName + ' ' + lastName;
//     }
//     return obj;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertObjectsEqual(actual, expected, testName) {
//     var actual = JSON.stringify(actual);
//     var expected = JSON.stringify(expected);

//     if (actual === expected) {
//         console.log('passed');
//     } else {
//         console.log(`FAILED [${testName}] \nExpected:\n\t"${expected}" \nActual: \n\t"${actual}"`)
//     }
// }
// // TESTS CASES
// // success test
// var obj = {
//     firstName: 'Mark',
//     lastName: 'Lucernas'
// }

// var expectedObjOutput = {
//     firstName: 'Mark',
//     lastName: 'Lucernas',
//     fullName: 'Mark Lucernas'
// }

// // missing one or more property
// var actualObjOutput = addFullNameProp(obj);
// assertObjectsEqual(actualObjOutput, expectedObjOutput, 'should creates new "fullName" property')

// var obj2 = {
//     lastName: 'Lucernas'
// }

// var actualObjOutput_2 = addFullNameProp(obj2);
// assertObjectsEqual(actualObjOutput_2, obj2, 'one or all of the properties does not exist, should return original object')


// // Skeleton

// // FUNCTION DEFINITION(S)
// function average(numbers) {
//     // uses sum function
//     var sumOfArray = sum(numbers);
//     // returns the average of an array of numbers
//     if (sumOfArray === 0) {
//         return 0;
//     }
//     var average = sumOfArray / numbers.length;
//     return average;
// }

// function sum(numbers) {
//     // returns the sum of an array of numbers
//     var sum = 0;
//     if (numbers.length !== 0) {
//         for (let i = 0; i < numbers.length; i++) {
//             sum += numbers[i];
//         }       
//     }
//     return sum;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//     if (actual === expected) {
//         console.log('passed');
//     } else {
//         console.log(`FAILED [${testName}] \nExpected: ${expected}\nActual: ${actual}`);
//     }
// }
// // TESTS CASES
// // sum func test
// var posArray = [1, 2, 3, 4, 5];
// var expectedSumOfPosNums = 15;
// assertEqual(sum(posArray), expectedSumOfPosNums, 'should return the sum of the positive numbers array');
// var negArray = [-1, -2, -3, -4, -5];
// var expectedSumOfNegNums = -15;
// assertEqual(sum(negArray), expectedSumOfNegNums, 'should return the sum of the negative numbers array');
// var mixedArray = [1, -2, 3, -4, 5];
// var expectedSumOfMixedNums = 3;
// assertEqual(sum(mixedArray), expectedSumOfMixedNums, 'should return the sum of the mixed numbers array');
// var emptyArray = [];
// expectedSumOfEmptyArr = 0;
// assertEqual(sum(emptyArray), expectedSumOfEmptyArr, 'should return the sum of the empty array')


// // average func test using the given arrays in sum func test
// // positive test
// var expectedAverageOfPosNums = 3;
// assertEqual(average(posArray), expectedAverageOfPosNums, 'should return the average of the positive numbers array');
// // negative test
// var expectedAverageOfNegNums = -3;
// assertEqual(average(negArray), expectedAverageOfNegNums, 'should return the average of the negative numbers array');
// // mixed numbers test
// var expectedAverageOfMixedNums = 0.6;
// assertEqual(average(mixedArray), expectedAverageOfMixedNums, 'should return average of the mixed numbers array');
// // empty array test
// var expectedAverageOfEmptyArr = 0;
// assertEqual(average(emptyArray), expectedAverageOfEmptyArr, 'should return the average of the empty array');



// // FUNCTION DEFINITION(S)

// // USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min +1)) + min;
//   }
  
// function decorateClassListWithAges(classList) {
//     // create a new array for storage of each objects
//     var newArr = []
//     // iterate of elements of the input array
//     for (let i = 0; i < classList.length; i++) {
//         // create an object around the element and turn it into a property with a random age value from the getRandomIntInclusive function above
//         var obj = {};
//         // assign value to the obj
//         var randomAge = getRandomIntInclusive(10, 11);
//         //convert array elements to obj
//         obj['name'] = classList[i];
//         obj['age'] = randomAge;
//         // add to the converted element to new array
//         newArr.push(obj);
//     }

//     // returns an array of these objects
//     return newArr;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// // create an assert function to compare objects in an array. For simplification purposes suitable for this lesson, just use JSON.stingify
// function assertPropertyValueWithinRange(actual, low, high, testName) {
//     // a switch if at least one of the values are not within range
//     var valuesWithinRange = true;
//     //iterate over the array and object literals
//     for (let i = 0; i < actual.length; i++) {
//         var obj = actual[i];
//         if (obj['age'] >= low && obj['age'] <= high) {
//             continue;
//         } else {
//             valuesWithinRange = false;
//             break;
//         }
//     }
//     // log if passed or failed
//     if (valuesWithinRange) {
//         console.log('passed');
//     } else {
//         console.log(`FAILED [${testName}]\n\tinput array object element age value not within range of ${low} to ${high}`);
//     }
// }
// function assertArrayEqual(actual, expected, testName) {
//     //test if classList object property 'name'(s) is the same as expected;
//     var sameName = true;
//     var actualArr = [];
//     var expectedArr = [];
    
//     for (let i = 0; i < actual.length; i++) {
//         var actualObj = actual[i]['name'];
//         var expectedObj = expected[i]['name'];
        
//         actualArr.push(actualObj);
//         expectedArr.push(expectedObj);
//     }

//     for (let i = 0; i < actualArr.length; i++) {
//         if (actualArr[i] !== expectedArr[i]) {
//             sameName = false;
//             break;
//         }
//     }

//     if (sameName) {
//         console.log('passed');
//     } else {
//         console.log(`FAILED [${testName}]\n\tExpected obj names: ${expectedArr}\n\tActual obj names: ${actualArr}`)
//     }
// }

// // TESTS CASES
// var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
// "Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
// "Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

// // First test. Test for decorateClassListWithAges
// var expected = [{"name":"Joe","age":11},{"name":"Jack","age":10},
// {"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
// {"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
// {"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
// {"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
// {"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
// {"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
// {"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
// {"name":"Dora","age":10}]
// var actual = decorateClassListWithAges(classList);
// assertArrayEqual(actual, expected, 'should test the age decorated aray')

// // Seconed test. Test with ALL property values ARE WITHIN the age range
// var actual = decorateClassListWithAges(classList);
// var low = 10;
// var high = 11;
// assertPropertyValueWithinRange(actual, low, high, 'age check if within the range 10 to 11')



// // Skeleton

// // FUNCTION DEFINITION(S)
// function isIsogram(text) {
//     // text to lowercase to ignore casing disparity
//     var text = text.toLowerCase();
//     // make a set
//     var set = new Set();
//     // iterate over the text
//     for (let i = 0; i < text.length; i++) {
//         // chech if char is in the set
//         if (set.has(text[i]) === false) {
//         // if char not already in the set
//             set.add(text[i]);
//         // else return false
//         } else {
//             console.log(`"${text[i]}" is the first repeating char from ${text}`);
//             return false;
//         } 
//     }
//     // return true assuming all chars from the text are unique
//     return true;
// }

// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//     if (actual === expected) {
//         console.log('passed');
//     } else {
//         console.log(`FAILEd [${testName}]\n\tExpected: ${expected}\n\tActual: ${actual}`)
//     }
// }

// // TESTS CASES
// var actualRepeatingChars = isIsogram('Mark Lucernas');
// var actualUniqueChars = isIsogram('QuickBrownSex');
// // test with one or more repeating character(s)
// var expectedRepeating = false;
// assertEqual(actualRepeatingChars, expectedRepeating, 'should return false if one or more of the same character');
// // test with all unique characters
// var expectedUnique = true;
// assertEqual(actualUniqueChars, expectedUnique, 'should return true if all of the characters are unique');



// // Bubble Sort Algorithm 
// var max = 10;
// var min = 1;

// function randomIntGenerator(min, max) {
//     var min = Math.ceil(min);
//     var max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function array2DGenerator(x, y, min, max) {
//     // x is the length of the outer array
//     // y is the length of the inner array(s)
//     // main/outer array
//     var mainArr = [];

//     // outer array iteration, x
//     for (let i = 0; i < x; i++) {
//         // inner array(s)
//         var subArr = [];
//         // inner array(s) iteration, y
//         for (let j = 0; j < y; j++) {
//             subArr.push(randomIntGenerator(min, max));
//         }
//         mainArr.push(subArr);
//     }
//     return mainArr;
// }

// // console.log(array2DGenerator(5, 5, 1, 10));

// function bubbleSort(array) {
//     /** Iterate over the array by the number of times equal to the length of the array - 1 (skipping the last index of the array), where j is the index value and i is the number of times it will go over the array */
//     var swapCount = 0;
//     for (let i = 0; 0 < array.length - i; i++) {
//         /**
//          * Swap the j'th and j'th + 1 if j'th is greater than j'th + 1
//          * The number of times it will go over the array, the lesser index values to be iterated over, as the biggest number will be pushed at the end of the array, so i + 2(skipping the last index value since the swapping stops at the penultimate index) will be subtracted to the length of the array. */

//         var arrBefore = JSON.stringify(array);
//         for (let j = 0; j <= array.length - (i + 2); j++) {
//             swapCount++

//             if (array[j] > array[j + 1]) {
//                 /** swap array[i] to the element next to it */
//                 var temp = array[j];
//                 array[j] = array[j + 1]
//                 array[j + 1] = temp;
//             }
//         }
//         var arrAfter = JSON.stringify(array);
        
//         /** check if there is no more number to be swapped */
//         if (arrBefore === arrAfter) {
//             console.log(`Bubble Sort Swap Count: "${swapCount}"`)
//             return array;
//         }
//     }
// }

// function randomSetGenerator(size, min, max) {
//     /** set vessel */
//     var set = new Set();

//     /** random number vessel */
//     var randomNum;

//     /** iterate over number times equal to the input size */
//     for (let i = 0; i < size; i++) {
//         randomNum = randomIntGenerator(min, max);
//         /** loop until generated number is unique to the set */
//         while (set.has(randomNum)) {
//             randomNum = randomIntGenerator(min, max);
//         }
//         set.add(randomNum)
//     }
//     return set;
// }

// var randomSet = randomSetGenerator(100, 1, 100);
// var convertedSetToArray = Array.from(randomSet);

// console.log(`Before:\n\t${convertedSetToArray}`);
// console.log(`After:\n\t${bubbleSort(convertedSetToArray)}`);




// // Skeleton

// // FUNCTION DEFINITION(S)
// function findMaxRepeatCountInWord(word) {
//     // Break up individual word into individual letters.
//     var word = word.toLowerCase().split('');
//     // Count the instances of each letter
//     var instanceObj = {};
//     // Iterate all the counts and find the highest
//     for (let i = 0; i < word.length; i++) {
//         var letter = word[i];
//         if (instanceObj.hasOwnProperty(word[i])) {
//             instanceObj[letter]++;
//         } else {
//             instanceObj[letter] = 1;
//         }
//     }
//     var highestInstanceCount = instanceObj[word[0]];
//     for (let letter in instanceObj) {
//         if (instanceObj[letter] > highestInstanceCount) {
//             highestInstanceCount = instanceObj[letter];
//             highestInstanceKey = letter;
//         }
//     }
//     // Return this word's max repeat count
//     return highestInstanceCount;
// }

// function findFirstWordWithMostRepeatedChars(text) {
//     var maxRepeatCountOverall = 0;
//     var wordWithMaxRepeatCount = '';
  
//     // Break up input text into words (space-delimited).
//     var words = text.split(' ');
//     // For each word...
//     for (let i = 0; i < words.length; i++) {
//         var word = words[i];
//         var repeatCountForWord = findMaxRepeatCountInWord(word)
//         // If that max repeat count is higher than the overall max repeat count, then
//         if (repeatCountForWord > maxRepeatCountOverall) {
//             // update maxRepeatCountOverall
//             maxRepeatCountOverall = repeatCountForWord;
//             // update wordWithMaxRepeatCount
//             wordWithMaxRepeatCount = word;
//         }
//     }
//     return wordWithMaxRepeatCount;
// }
// // ASSERTION FUNCTION(S) TO BE USED
// function assertEqual(actual, expected, testName) {
//     if (actual === expected) {
//         console.log("passed");
//     } else {
//         console.log(`FAILED [${testName}]\n\tExpected: ${expected}\n\tActual: ${actual}`)
//     }
// }
// // TESTS CASES
// var nonRepeatingText = "Hi, My name is Mark Lucernas";
// var actualWithNoMoreThanOneInstanceOfRepeatingChars = findFirstWordWithMostRepeatedChars(nonRepeatingText);
// var expected = "Hi,";
// assertEqual(actualWithNoMoreThanOneInstanceOfRepeatingChars, expected, 'should return the first word');

// var multipleRepeatingText = "Hello, My name is Maaark Lucernas";
// var actualWithMultipleRepeatingInstancesOfChars = findFirstWordWithMostRepeatedChars(multipleRepeatingText);
// var expected = "Maaark";
// assertEqual(actualWithMultipleRepeatingInstancesOfChars, expected, 'should return the word with highest repeating chars');

// var multipleRepeatingTextWithRepeatingUpperCaseLetters = "HeLlo, My name MaAaArk Lucernas";
// var actualWithRepeatingTextUpperCaseInclusive = findFirstWordWithMostRepeatedChars(multipleRepeatingTextWithRepeatingUpperCaseLetters);
// var expected = "MaAaArk";
// assertEqual(actualWithRepeatingTextUpperCaseInclusive, expected, 'should return the word with highest repeating chars uppercase inclusive');

