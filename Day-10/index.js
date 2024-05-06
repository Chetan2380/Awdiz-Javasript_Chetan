array=[1,2,3,4,5,6];
target=5;
function FindTwoNumbers(array, target){
    // console.log(array)
    for(var i=0; i<array.length-1; i++)
    {
        for(var j=i+1; j<array.length; j++){
            // console.log("Inner loop.");
            // count++
            // console.log(array[i], "+", array[j], "=", array[i] + array[j]);
            if(array[i]+array[j]===target){
                console.log(array[i],array[j])
            }
        }
    }
}
FindTwoNumbers(array,target);


var array = [5, 6, 7, 8, 9, 4, 5, 7, 6, 3, 8, 2, 4, 5, 9];
var target = 10;
// Find 3 numbers from array whose addition is target .
function FindThreeNumber(array, target) {
  var results = [];
  for (var i = 0; i < array.length - 2; i++) {
    for (var j = i + 1; j < array.length - 1; j++) {
      for (var k = j + 1; k < array.length; k++) {
        // console.log(array[i], array[j], array[k]);
        if (array[i] + array[j] + array[k] === target) {
          results.push([array[i], array[j], array[k]]);
        }
      }
    }
  }
  return results;
}

console.log(FindThreeNumber(array, target));

var array = [1, 2, 3];
array.push(4);
console.log(array);
array.pop();
array.pop();
console.log(array);
array.unshift(4, 5);
array.unshift(6);
console.log(array);
array.shift();
console.log(array);

var students = ["virat", "rohit", "rahul", "rishabh"];
// students.splice(1, 1, "Rahul");
// console.log(students);
// students.splice(2, 0, "Rishabh");
// console.log(students);
// students.splice(0, 1, "a"); 
// console.log(students);
// students.splice(3, 0, "b"); 
// console.log(students);

const newArray = students.slice(0, 1);
console.log(newArray);

const todo = ["Do assignment", "Eat lunch", "Go home"];
todo.splice(1, 1);
console.log(todo);

const array3 = [1, 2, "a", "1a"];
console.log(array3.toString());

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const array2 = [1, 30, 4, 21, 100000];
array2.sort();
console.log(array2);


// Arrow function
const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
const array4 = [1, 30, 4, 21, 100000];
array4.sort((a, b) => b - a);
console.log(array1);
console.log(array4);

