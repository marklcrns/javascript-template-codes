/* Factory Function - naming convention uses Camel Notation */

// function createCircle(radius) {
//   return {
//     radius: radius,
//     // draw: function() {    instead of having similar to a key-value pair, this function can be shortened by dropping function itself.
//     //   console.log('draw');
//     // }
//     // ... like this
//     draw() {
//       console.log('draw');
//     }
//   }
// }

// const circle1 = createCircle(1);
// console.log(circle1.draw);

// const circle2 = createCircle(2);
// console.log(circle2);


/* Constructor Function - naming convention uses Pascal Notation */

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// // new operator creates an empty object
// const circle1 = new Circle(1);
// console.log(circle1.draw());

// const circle2 = new Circle(2);
// console.log(circle2);


// both functions produces the same object and can both be used in a similar way. However, the constructor function is more reminiscent of programming langueage such as Java or C#. Thats why some programmers who program with Java or C# prefer constructor function over the other. Nevertheless, they are virtually identical in terms of functionality.


/* Prototype Funcion */

// function Circle(radius) {
//   this.radius = radius;
//   // this.draw = function() {    // drop this function in the Circle constructor function and make a prototype for the function
//   //   console.log('draw');
//   // }
// }

// // Instead of having a bunch of functions everywhere in every instance of the Circle function, constructor function makes it more efficient and less redundunt as it allows the constructor function to have a function outside of its scope and not create the same exact function for every single instance.
// Circle.prototype.draw = function () {
//   console.log('draw');
// }

// // new operator creates an empty object
// const circle1 = new Circle(1);
// console.log(circle1.draw());

// const circle2 = new Circle(2);
// console.log(circle2);

