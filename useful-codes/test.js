// // isPrime Function I made.

// // while x is = to the integer, increment x
// // if the integer is even, return false
// // and print integer is divisible by the incremented x

// function isPrime(integer) {
//     var primeFactors = []
//     for(let x = 2; x < integer; x++) {
//         if(integer % x === 0) {
//             primeFactors.push(x);
//         }
//     }
//     if (primeFactors.length === 0) {
//         return true;
//     }
//     return integer + " is divisible by: " + primeFactors;
// }

// console.log(isPrime(5675));


// // Counting characters from a string
// function countCharacter(str, char) {
//   var counter = 0;
//   for(let i = 0; i < str.length; i++) {
//       if(str[i] === char) {
//         counter += 1;
//       }
//   }
//   return counter;
// }
// var string = "This is a sample string"
// var char = "a"
// console.log(countCharacter(string, char));


// // Square Elements
// function squareElements(arr) {
//   let squaredArray = []
//   for(let i = 0; i < arr.length; i++) {
//     let squared = arr[i]**2;
//     squaredArray.push(squared);
//   }
//   return squaredArray;
// }
// console.log(squareElements([1, 2, 3, 4, 5]));
// var array = [1, 2, 3, 4, 5];

// // Sum of all elements in the given array
// function computeSumOfAllElements(arr) {
//   let sum = 0
//   for(let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//   }
//   return sum;
// }
// console.log(computeSumOfAllElements([1, 2, 3, 4, 5]));

// // Average of an array
// function computeAverageOfNumbers(nums) {
//   let sum = 0
//   for(let i = 0; i < nums.length; i++) {
//       sum += nums[i];
//   }
//   let average = sum / nums.length;
//   return average;
// }
// console.log(computeAverageOfNumbers(array));

// var object = {
//   a : 'a',
//   number : 11,
//   hungry : true,
//   grammyWins : 1
// }

// console.log(Object.values(object));

// function getAllKeys(obj) {
//   let keys = []
//   for(let key in obj) {
//       keys.push(key);
//   }
//   return keys
// }
// console.log(getAllKeys(object));


// // Counting string data type in object valeus.
// var input = {
//   name : 'Krysten',
//   age : 33,
//   hasPets : false,
//   catchPhrase: "I don't have a catch phrase"
// }

// function countStringValues(obj) {
//     let counter = 0;
//     for(key in obj) {
//         if(typeof obj[key] === "string") {
//             counter++
//         }
//     }
//     return counter
// }
// console.log(countStringValues(input));

let obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: [1, 2, 3, 4, 5]
}

let obj2 = {
    a: 2,
    b: 45,
    d: 35,
    f: "Lucernas"
}


// extend(obj1, obj2);

// console.log(obj1);
// console.log(obj2);

// var array = "Mark Lucernas,asdf dsjf haslkf hsdalikj fhsadf sadif uasfijsaf isadjfb aisdjf asidjfasif sdi dfbaiofs "

// function findMaxLengthOfThreeWords() {
//     // var max = Math.max(word1.length, word2.length, word3.length);
//     // return max;
//     var arr = [];

//     for (let i in arguments) {
//         arr.push(parseInt(arguments[i].toString().length));
//     }

//     var maxLength = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxLength) {
//             maxLength = arr[i];
//         }
//     }
//     console.log(arr);
//     return maxLength;
// }

// console.log(findMaxLengthOfThreeWords("aasddf", 123, "mark", "", "a", array));

function select(arr, obj) {
    var newObj = {}
    var counter = 0
    for (let k in obj) {
        if (k === arr[counter]) {
        newObj[k] = obj[k];
        counter++
        }
    }
    return newObj;
}

// console.log(select(['a', 'd', 'f'], obj2));


// count all characters of a string without whitespaces
function countAllCharacters(str) {
    var obj = {};
    var charStr = str.replace(/\s/g, '') // or use str.split(' ').join('')
    for (let i = 0; i < charStr.length; i++) {
        if (obj[charStr[i]] === undefined) {
            obj[charStr[i]] = 1;
        } else {
            obj[charStr[i]] += 1;
        }
        
    }
    return obj;
}

// console.log(countAllCharacters("The quick brown fox jumps over the lazy dog."))


function getFirstElementOfProperty(obj, key) {
    if (obj[key] !== undefined && Array.isArray(obj[key])) {
        return obj[key][0];
    }
    return undefined;
}

// console.log(getFirstElementOfProperty(obj1, "c"))


function getNthElementOfProperty(obj, key, n) {
    // test if undefined
    if (obj[key] !== undefined) {
        // var assign 
        var property = obj[key];
        // var true if is an array type
        var isArray = Array.isArray(property);
        // var true if property is empty
        var isEmpty = property === '';
        // var true if n is out of range or n > length of the array
        var isOutOfRange = n > property.length;

        // test all conditions and return the result
        if  (!isEmpty && !isOutOfRange && isArray) {
        return property[n];
        }
    }
    return undefined;
}

// var obj = {
//   key: [1, 2, 6]
// };
// var output = getNthElementOfProperty(obj, 'key', 2);
// console.log(output);


function computeAverageOfNumbers(nums) {
    var sum  = 0
    var average = 0
    if (nums.length !== 0) {
            
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        average = sum / nums.length;
        return average;

    } else {
        return sum;
    }
}

// var input = [1, 2, 3, 4, 5];
// var output = computeAverageOfNumbers(input);
// console.log(output); // --> 3


function removeElement(array, discarder) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === discarder) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
}

// var output = removeElement([1, 2, 2, 3, 1], 2);
// console.log(output); // --> [1, 3, 1]

function getOddLengthWordsAtProperty(obj, key) {
    var newArray = [];
    if (obj[key] !== undefined && Array.isArray(obj[key])) {
        for (let i = 0; i < obj[key].length; i++) {
            if (obj[key][i].length % 2 === 1) {
                newArray.push(obj[key][i]);
            }
        }
    }
    return newArray;
}

// var obj = {
//   key: ['It', 'has', 'some', 'words']
// };
// var output = getOddLengthWordsAtProperty(obj, 'key');
// console.log(output);


function getAverageOfElementsAtProperty(obj, key) {
    var sum = 0;
    if (obj[key] !== undefined) {
        var isEmpty = obj[key].length === 0;
        var isArray = Array.isArray(obj[key])
        
        if (!isEmpty && isArray) {
            for (let i = 0; i < obj[key].length; i++) {
                sum += obj[key][i];
            }
        return sum / obj[key].length;
        }
    }
    return sum;
}

// var obj = {
//   key: [1, 2, 3]
// };
// var output = getAverageOfElementsAtProperty(obj, 'key');
// console.log(output);


function getEvenLengthWordsAtProperty(obj, key) {
    var array = [];
    if (obj[key] !== undefined) {
        var isEmpty = obj[key].length === 0;
        var isArray = Array.isArray(obj[key]);
        
        for (let i = 0; i< obj[key].length; i++) {
            if (obj[key][i].length % 2 === 0) {
                array.push(obj[key][i]);
            }
        }
    }
    return array
}

// var obj = {
//   key: ['a', 'long', 'game']
// };
// var output = getEvenLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> [ 'long', 'game' ]


function getOddElementsAtProperty(obj, key) {
    var oddArray = []
    if (obj[key] !== undefined) {
        var isEmpty = obj[key].length === 0;
        var isArray = Array.isArray(obj[key]);

        if (!isEmpty && isArray) {

        // for (let i = 0; i < obj[key].length; i++) {
            // if (obj[key][i] % 2 === 1) {
                // oddArray.push(obj[key][i]);
            // }

            // alternative way.    
            obj[key].forEach(function(x) {
                if (x % 2 === 1) {
                    oddArray.push(x);
                }
            })
        }
    }
    return oddArray;
}


// var obj = {
//   key: [1, 2, 3, 4, 5]
// };
// var output = getOddElementsAtProperty(obj, 'key');
// console.log(output); // --> [1, 3, 5]


function getEvenElementsAtProperty(obj, key) {
    var array = [];
    if (obj[key] !== undefined) {
        var isEmpty = obj[key].length === 0;
        var isArray = Array.isArray(obj[key]);
      
        if (!isEmpty && isArray) {
            for (let i = 0; i < obj[key].length; i++) {
                if (obj[key][i] % 2 === 0) {
                    array.push(obj[key][i]);
                }
            }
        }
    }
    return array;
}

// var obj = {
//   key: [1000, 11, 50, 17]
// };
// var output = getEvenElementsAtProperty(obj, 'key');
// console.log(output); // --> [1000, 50]


function filterOddLengthWords(words) {
    if (words.length !== 0) {
        for (let i = 0; i < words.length; i++) {
            //remove even lenght of strings
            if (words[i].length % 2 === 0) {
                words.splice(i, 1);
                i--;
            }
        }    
    }
    return words;
}

// var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
// console.log(output); // --> ['there', "now']


function getAllButLastElementOfProperty(obj, key) {
    if (obj[key] !== undefined) {
        var isArray = Array.isArray(obj[key]);
        var isEmpty = obj[key] === 0;
        
        var allButLastElement = obj[key].slice(0, obj[key].length -1);

        if (isArray && !isEmpty) {   
            return allButLastElement;
        }
    }
    return [];
}

// var obj = {
//   key: [1, 2, 3]
// };
// var output = getAllButLastElementOfProperty(obj, 'key');
// console.log(output); // --> [1,2]


function getStringLength(string) {
    var count = 0;
    
    // var str = string.split('');

    // str.forEach(function (x) {
    //     count++;
    // })
    
    while (string !== '') {
        string = string.slice(1);
        count++
    }
    return count;
}

// var output = getStringLength('hello');
// console.log(output);

function joinArrayOfArrays(arr) {
    var concatenated = arr[0];
    for (let i = 1; i < arr.length; i++) {
        concatenated = concatenated.concat(arr[i]);
    }
    return concatenated;
}


function sumDigits(num) {
    //convert to absolute value to remove negative sign
    var abs = Math.abs(num);
    // convert to string for indexing
    var digits = abs.toString();
    // switch for applying the first negative number
    var inputIsNegative = false
    var sum = 0;

    // if num is not equal to zero. Return the sum immediately when input is zero.
    if (num !== 0) {
        // if num is a negative number
        if (num < 0) {
            inputIsNegative = true
        }
        // iterate over the string digits and add to the sum variable
        for (let i = 0; i < digits.length; i++) {
            sum += Number(digits[i]);
        }
    }

    // if num is negative, subtract the first value from the total
    if (inputIsNegative === true) {
        sum -= (2 * digits[0]);
    }
    // catch all return value
    return sum
}


// var output = sumDigits(-316);
// console.log(output);


function findShortestWordAmongMixedElements(arr) {
    var shortestElem = ''
    if (arr.length !== 0) {
        var tempArray = []
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "string") {
                tempArray.push(arr[i]);
            }
        }
        if (tempArray.length !== 0) { 
            shortestElem = tempArray[0];
            for (let i = 0; i < tempArray.length; i++) {
                if (tempArray[i].length < shortestElem.length) {
                    shortestElem = tempArray[i]
                } 
            }
        }
    }
    return shortestElem;
}

// var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
// console.log(output); // --> 'two'


function convertScoreToGrade(score) {
    
    switch (true) {
        case (score <= 100 && score >= 90):
            return 'A';
            break;
        case (score <= 89 && score >= 80):
            return 'B';
            break;
        case (score <= 79 && score >= 70):
            return 'C';
            break;
        case (score <= 69 && score >= 60):
            return 'D';
            break;
        case (score <= 59 && score >= 0):
            return 'F';
            break;
        case (score < 0 || score > 100):
            return "INVALID SCORE";
    }
}

// var output = convertScoreToGrade(91);
// console.log(output); // --> 'A'


function convertScoreToGradeWithPlusAndMinus(score) {

    // switch (true) {
        // case (score <= 100 && score >= 90):
        //     if (score >= 98) {
        //         return 'A+';
        //     } else if (score <= 92) {
        //         return 'A-';
        //     } else {
        //         return 'A';
        //     }
        //     break;
        // case (score <= 89 && score >= 80):
        //     if (score >= 88) {
        //         return 'B+';
        //     } else if (score <= 82) {
        //         return 'B-';
        //     } else {
        //         return 'B';
        //     }
        //     break;
        // case (score <= 79 && score >= 70):
        //     if (score >= 78) {
        //         return 'C+';
        //     } else if (score <= 72) {
        //         return 'C-';
        //     } else {
        //         return 'C';
        //     }
        //     break;
        // case (score <= 69 && score >= 60):
        //     if (score >= 68) {
        //         return 'D+'
        //     } else if (score <= 62) {
        //         return 'D-';
        //     } else {
        //         return 'D';
        //     }
        //     break;
        // case (score <= 59 && score >= 0):
        //     return 'F';
        //     break;
        // case (score < 0 || score > 100):
        //     return "INVALID SCORE";


        // alternative way
    var gradeLetter;
    switch (true) {

        case (score <= 100 && score >= 90):
            gradeLetter = 'A';
            break;
        case (score <= 89 && score >= 80):
            gradeLetter = 'B';
            break;
        case (score <= 79 && score >= 70):
            gradeLetter = 'C';
            break;
        case (score <= 69 && score >= 60):
            gradeLetter = 'D';
            break;
        case (score <= 59 && score >= 0):
            return 'F';
            break;
        case (score < 0 || score > 100):
            return "INVALID SCORE";
    }
    var gradeCondition = score.toString()[1];
    if (gradeCondition >= 8) {
        return gradeLetter + "+";
    } else if (gradeCondition <= 2) {
        return gradeLetter + "-";
    } else {
        return gradeLetter;
    }
}

// var output = convertScoreToGradeWithPlusAndMinus(91);
// console.log(output); // --> 'A-'

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    // Pi = (P * (1 + r/n) ** nt) - P
    
    var totalPrincipal = (principal * ( 1 + interestRate / compoundingFrequency) ** (compoundingFrequency * timeInYears))

    var totalInterest = totalPrincipal - principal;

    return totalInterest;
}

// var output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output);


// function modulo(num1, num2) {
//     if (num1 === 0) {
//         return 0;
//     } else if (num2 === 0) {
//         return NaN;
//     } else if (isNaN(num1) || isNaN(num2)) {
//         return NaN;
//     }
//     // get the highest amount num2 could fit in num1
//     var dividend = Math.abs(num1);
//     var divisor = Math.abs(num2);
//     while (divisor < dividend) {
//         divisor += num2;
//         if (divisor > dividend) {
//             divisor -= num2;
//             break;
//         }
//     }
//     var remainder = dividend - divisor;
//     if (Math.sign(num1) === -1) {
//         remainder = -Math.abs(remainder);
//     }
//     return remainder;
// }


function modulo(num1, num2) {
    if (num1 === 0) {
        return 0;
    } else if (num2 === 0) {
        return NaN;
    } else if (isNaN(num1) || isNaN(num2)) {
        return NaN;
    }
    // loop subtract num2 from num1 until it does not num2 > num1
    var resultIsNegative = false;
    if (num1 < 0) {
        resultIsNegative = true;
    }
    var num1 = Math.abs(num1);
    var num2 = Math.abs(num2);
    
    while (num1 >= num2) {
        num1 -= num2;
        }
    var result = num1
    if (resultIsNegative) {
        result = -Math.abs(result);
    }
    return result;
}

// var output = modulo(-12, 4);
// console.log(output);

function multiply(num1, num2) {
    var productIsNegative = false;
    if (num1 < 0) {
        productIsNegative = true;
        if (num2 < 0) {
            productIsNegative = false;
        }
    } else if (num2 < 0) {
        productIsNegative = true;
    }
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    var product = 0
    
    for (let i = 0; i < num1; i++) {
        product += num2;
    }
    
    if (productIsNegative) {
        return -Math.abs(product);
    } else {
        return product;
    }
}   

// var output = multiply(4, 7);
// console.log(output);


function multiplyBetween(num1, num2) {
    if (num1 > num2 || num1 === num2) {
        return 0;
    }
    
    var product = 1;
    for (let i = num1; i < num2; i++) {
        product *= i;
    }
    return product    
}

// var output = multiplyBetween(2, 5);
// console.log(output); // --> 24


function transformEmployeeData(employeeData) {
    var mainArr = []

    for (let i = 0; i < employeeData.length; i++) {
        var personArray = employeeData[i];
        var personObject = {};
        for (let j = 0; j < employeeData[i].length; j++) {
            var key = personArray[j][0];
            var value = personArray[j][1];

            personObject[key] = value;
        }
        mainArr.push(personObject);
    }
    return mainArr;
}

// Alternative way by cloning the obj each iteration with the inline cloning function

// function transformEmployeeData(employeeData) {
//     var mainArr = []
//     var obj = {}
    
//     var key;
//     var value;
//     for (let i = 0; i < employeeData.length; i++) {
//         for (let j = 0; j < employeeData[i].length; j++) {
//             key = employeeData[i][j][0];
//             value = employeeData[i][j][1];

//             obj[key] = value;
//         }
//         mainArr.push(obj);
//     }
//     return mainArr;
// }

// var input = [
//     [
//         ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
//     ],
//     [
//         ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
//     ],
//     [
//         ['firstName', 'Chesca'], ['lastName', 'Lucernas'], ['age', 22] , ['role', 'bad bitch']
//     ]
// ]

// console.log(transformEmployeeData(input));

