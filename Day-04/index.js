
//Created by Chetan Ingale

// Conditional Statement
// 1. if else
// 2. switch

// Comparision Operator

// value 1 > value 2
// value 1 < value 2
// value 1 <= value 2
// value 1 >= value 2
// =   -> to assign value to varible
// ==  -> to compare only datas
// === -> to compare with data and datatype

var num1 = 100;
var num2 = 20;
console.log(num1 == num2);

var num1 = 20;
var num2 = '20';
console.log(num1 == num2);
console.log(num1 === num2);

console.log(200 > 30);
console.log(200 < 30);
console.log(80 <= 80);
console.log(80 >= 80);
console.log(80 != 30);

// if else

// syntax
// if(condition){
//     statement 1
// } else {
//     statement 2
// }

// if(condition 1){
// statement 1
// } else if(condition 2) {
// statement 2
// } else {
//  statement 3
// }

console.log("---------------------------Check if person is eligible for driving license or not.---------------------------")
console.log("-------Age = 30-------")
var age = 30;

if (age > 18) {
  console.log("Your age is valid for Driving License.");
} else if (age == 18) {
  console.log("you are allowed for LL.");
} else if (age == 30) {
  console.log("Your age is 30.");
} else {
  console.log("Your age is Not valid for Driving License.");
}

console.log("-------Age = 18-------")
var age = 18;

if (age > 18) {
  console.log("Your age is valid for Driving License.");
} else if (age == 18) {
  console.log("you are allowed for LL.");
} else if (age == 30) {
  console.log("Your age is 30.");
} else {
  console.log("Your age is Not valid for Driving License.");
}

console.log("-------Age = 16-------")
var age = 16;

if (age > 18) {
  console.log("Your age is valid for Driving License.");
} else if (age == 18) {
  console.log("you are allowed for LL.");
} else if (age == 30) {
  console.log("Your age is 30.");
} else {
  console.log("Your age is Not valid for Driving License.");
}


console.log("---------------------------Check if number is even or odd---------------------------")
console.log("--------------Using if else if--------------")
console.log("-------Number = 884-------")

var number = 884;

if (number%2 == 0){
    console.log("Even")
}
else if(number%2 != 0){
    console.log("Odd")
}

console.log("---------------------------Check if number is even or odd---------------------------")
console.log("--------------Using if else--------------")
console.log("-------Number = 86-------")

var number = 86;

if (number%2 == 0){
    console.log("Even")
}
else {
    console.log("Odd")
}

//Created by Chetan Ingale