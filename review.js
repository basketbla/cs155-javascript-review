// 100 seconds
// https://www.youtube.com/watch?v=DHjqpvDnNGE

// Primitive Types
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// let myName = "John"; // string
// let myAge = 28; // number
// let isMarried = false; // boolean
// let myWife; // undefined
// let myMarriage = null; // null
// let bigNumber = 12345678901234567890123456789n; // bigint -- used for big numbers, doesn't matter
// let sym = Symbol(); // symbol -- has unique keys, also doesn't matter

// console.log(typeof(myAge)); // number
// console.log(typeof(myMarriage)); // object -- javascript quirk

// console.log("My name is " + myName); // My name is John
// console.log('I am ' + myAge + ' years old.'); // I am 28 years old.
// console.log(`Am I married? ${isMarried}`); // Am I married? false
// console.log("My wife: " + myWife); // My wife: undefined
// console.log("My marriage: " + myMarriage); // My marriage: null

// TRAP #1: == vs ===
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

// // == checks value, === checks type and value. 
// let x = 5;
// let y = "5";

// console.log(x == y); // Output: true
// console.log(x === y); // Output: false

// x = null;
// y = undefined;

// console.log(x == y); // Output: true
// console.log(x === y); // Output: false

// When in doubt, use ===


// Objects -- Everything is an object :o
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// let myHobbies = ["reading", "music", "traveling"]; // array
// let hobject = {
//   1: "reading",
//   2: "music",
//   3: "traveling"
// }

// console.log("My hobbies include " + myHobbies); // My hobbies include reading,music,traveling
// console.log("My hobbies include " + hobject); // My hobbies include [object Object]
// console.log("My hobbies include " + JSON.stringify(hobject)); // My hobbies include {"1":"reading","2":"music","3":"traveling"}
// console.log(hobject); // { '1': 'reading', '2': 'music', '3': 'traveling' }


// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers)); // 6

// let hobject2 = {...myHobbies};
// console.log(hobject2); // { '0': 'reading', '1': 'music', '2': 'traveling' }


// TRAP #2: for in / for of
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// let myHobbies = ["reading", "music", "traveling"]; // array

// for (let x in myHobbies) { // 0, 1, 2
//   console.log(x);
// }

// for (let x of myHobbies) { // reading, music, traveling
//   console.log(x);
// }

// Loops / conditionals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

// if (true) {
//   console.log("true");
// } else if (false) {
//   console.log("false 1");
// } else {
//   console.log("false 2");
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// var switchVar = 3;
// switch (switchVar) {
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//     console.log("2");
//     break;
//   case 3:
//     console.log("3");
//     break;
//   default:
//     console.log("no match");
// }

// console.log(true ? 1 : 2)


// Var let const
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const



// Using var -- globally / function scoped
// var a = 1;
// if (a === 1) {
//   var a = 2;
//   console.log(a);
//   // Expected output: 2
// }
// console.log(a);
// // Expected output: 2




// Using let -- block-scoped
// let b = 1;
// if (b === 1) {
//   let b = 2;
//   console.log(b);
//   // Expected output: 2
// }
// console.log(b);
// // Expected output: 1




// Using const -- block-scoped and constant
// const number = 42;
// try {
//   number = 99;
// } catch (err) {
//   console.log(err);
//   // Expected output: TypeError: invalid assignment to const `number'
//   // (Note: the exact output may be browser-dependent)
// }
// console.log(number);
// // Expected output: 42




// Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions

// function square(a) {
//   return a**2;
// }

// const squareArrow = (a) => {
//   return a**2;
// }

// const squareArrowShorter = (a) => a**2;

// function defaultParams(a, b = 2) {
//   console.log(a);
//   console.log(b);
// }
// defaultParams();

// This
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

// this refers to the object that the function is a property of (the global object 'window' for browsers, or node's thing)

// function regularFunction() {
//   console.log(this); // Will print node global object
// }

// regularFunction();

// const arrowFunction = () => {
//   console.log(this); // Will print an empty object
// }

// arrowFunction();


// Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// var square = new Rectangle(10, 10);

// console.log(square.area); // 100

// Closures
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://www.youtube.com/watch?v=vKJpN5FAeF4

// Closures let you access variables from outer function's scope in inner function
// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();


// With for loops, var gets hoisted to global scope
// for (var i = 0; i < 3; i++) {

//   const log = () => {
//     console.log(i);
//   }

//   setTimeout(log, 100);
// }


// Callback: functions as parameters
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function


// let a = (func) => {
//   func("foo");
// };

// a(console.log);

// Async stuff (promises)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// myPromise.then(result => {
//   console.log("resolved: " + result);
// }, error => {
//   console.log("rejected: " + error);
// });

// TRAP #3: Not waiting on promises

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// const promiseFunction = () => {
//   return myPromise;
// }

// console.log(promiseFunction());
// promiseFunction().then(result => console.log(result));

// Problem: callback hell

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 1000);
// });

// myPromise.then(result => {
//   myPromise.then(result => {
//     myPromise.then(result => {
//       console.log("callback hell");
//     })
//   })
// })


// Solution: async/await
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// function resolveAfter2Seconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
// }

// asyncCall();


// TRAP #4: Await functions automatically return promises -- don't do extra work!

// function resolveAfter2Seconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function returnsPromise() {
//   await resolveAfter2Seconds();
//   return 5;
// }

// console.log(returnsPromise());


// Node vs browser (and devtools)
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
// https://developer.chrome.com/docs/devtools/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger