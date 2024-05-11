const array1 = [1, 2, 3, 4];
const output1 = array1.map((awdiz) => awdiz * 2);
console.log(array1);
console.log(output1);

const array2 = [1, 2, 3, 4, 5];
array2.forEach((ele) => console.log(ele));

const array3 = [1, 2, 3, 4, 5];
const sum = array3.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);


const array4 = [1, 2, 3];
const array5 = [4, 5, 6];
const combinedArray = array4.concat(array5);
console.log(combinedArray);
const combinedArray1 = array5.concat(array4);
console.log(combinedArray1);

const numbers = [1, 2, 3, 4, 5, 6];
const output = numbers.find((number) => number > 3);
console.log(output);


const number = [5, 6, 7, 8, 9];
const index = number.findIndex((value) => value > 4);
console.log(index);

const data = [1, 2, 3, 4, "cat", "dog"];
const isExist = data.includes("abc");
console.log(isExist);
const isExist1 = data.includes("dog");
console.log(isExist1);


