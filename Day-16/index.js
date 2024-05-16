console.log("Before settimeout");

setTimeout(() => {
  console.log("Inside setTimeout handler.");
}, 10000);

console.log("After settimeout");

setTimeout(() => {
  console.log("2nd Inside setTimeout handler.");
}, 1000);


// setInterval(() => {
//   console.log("Inside set interval.");
// }, 1000);

// console.log("Before");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 10000);

// console.log("After");

