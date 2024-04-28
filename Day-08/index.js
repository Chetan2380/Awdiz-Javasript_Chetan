console.log("--------Print 10-15 in reverse order i.e., 15-10--------")
for (var i = 15; i >= 10; i--) {
  console.log(i);
}


// Q. Print number in given order and also in reverse from given array, use for loop .

var array = [6, 2, 16, 38, 15, 26, 35];
console.log("--------Print in given order of array--------")

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("--------Print in reverse order from array--------")
for (var i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}

// Q .  find addition of numbers from array who are odd
console.log("--------Print addition of numbers from array who are odd--------")
var array1 = [25, 23, 16, 38, 6, 76, 7, 4, 2];

var count = 0; // 1
for (var i = 0; i < array1.length; i++) {
  if (array1[i] % 2 === 1) {
    count += array1[i];
  }
}
console.log("Count", count);

// Q. Print "Welcome" 8 times.
console.log("--------Print `Welcome` 8 times--------")
for (var i = 1; i <= 8; i++) {
    console.log("Welcome");
}

// Q. Given an array find name of student whose lenght is more than 5.
console.log("--------Print name of student whose lenght is more than 5--------")
var students = ["Gill", "Ishan", "Surya", "Dinesh","hardik"];

for (var i = 0; i < students.length; i++) {
  if (students[i].length > 5) {
    console.log(students[i]);
  }
}