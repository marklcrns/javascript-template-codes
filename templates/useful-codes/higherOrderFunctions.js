const companies = [
  {
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2003
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "Company Five",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
console.log(ages);

/**
 * FOREACH - apply funtion to each element.
 */

companies.forEach(function(company) {
  console.log(company);
});

/* with regular for loop */

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

/* with the ES6 arrow function */

// companies.forEach(company => console.log(company));

/**
 * FILTER - for filtering object values.
 */

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// })
// console.log(canDrink);

/* with the ES6 arrow function */

// const canDrink = ages.filter(age => age >=21);
// console.log(canDrink);

/* with regular for loop */

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }
// console.log(canDrink);

/* filter company category */

// const retailCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// })
// console.log(retailCompanies);

/* with ES6 arrow function */

// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

/* Get 80's companies */

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

/* companies that lasted more than 10 years */

// const moreThanTenYears = companies.filter(company => ((company.end - company.start) >= 10));
// console.log(moreThanTenYears);

/**
 * MAP - for creating a new array of the filtered object values.
 */

/* create an array of company names */

// const companyNames = companies.map(function(company) {
//   return company.name;
// })
// console.log(companyNames);

/* with template literals */

// const companyWithYears = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(companyWithYears);

/* with math function and more than one higher order function */

// const agesSquare = ages
// .map(age => Math.sqrt(age))  // squaring each age
// .map(age => age * 2);  // then multiplying it by two

// agesSquare.forEach(function(num) {
//   console.log(Math.floor(num));
// })

/**
 * SORT - sort all elements by the function.
 */

/* sort companies by start date */

//  const sortedCompanies = companies.sort(function(c1, c2) {
//    if (c1.start > c2.start) {
//      return 1;
//    } else {
//      return -1;
//    }
//  });
//  console.log(sortedCompanies);

/* with the ES6 arrow function */

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

/* sorting with two or more digits */

// console.log(ages.sort());  // this sort function without an arguement only works for single digit num, which in this case 5 is out of place

// const sortAges = ages.sort((a, b) => (a - b));  // proper way to solve multiple digit numbers. To sort in descending order do b - a instead.
// console.log(sortAges);

/**
 * REDUCE - for reducing all elements into specified conditions
 */

/* summing all int elements with regular for loop*/

//  let ageSum = 0;
//  for (let i = 0; i < ages.length; i++) {
//    ageSum += ages[i];
//  }

// console.log(ageSum);

/* summing all int elements with reduce function*/

// const sum = ages.reduce(function(a, b) {
//   return a + b;
// });
// console.log(sum);

/* with the ES6 arrow function*/

// const sum = ages.reduce((a, b) => a + b, 0);
// console.log(sum);

// const sum = ages.reduce((a, b) => a - b, 0);
// console.log(sum);

/**
 * COMBINED METHODS
 */

//  const combined = ages
//   .map(age => age * 2)  // multiply each element by 2
//   .filter(age => age >= 40) // filter out anything not greater or equal to 40
//   .sort((a, b) => a - b) // sort in descending order
//   .reduce((a, b) => a + b, 0); // get the sum total of all elements

//   console.log(combined);
