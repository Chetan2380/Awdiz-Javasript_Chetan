var player = "Kartik";

switch (player) {
    case "Virat":
        console.log("Player name is Virat.");
        break;
    case "Rohit":
        console.log("Player name is Rohit.");
        break;
    case "Dhoni":
        console.log("Player name is Dhoni.");
        break;
    case "Hardik":
        console.log("Player name is Hardik.");
        break;
    default:
        console.log("Player does not exist.");
}

var first = 30;
var second = 50;
var third = 100;

console.log(first > second);
console.log(first > third);
console.log(second > third);

console.log(40 > 20 && 30 > 10 && 6 > 10);
console.log(40 > 20 && 30 > 10 && 60 > 10);


// function drivinglicense(){
//     const number1 = document.getElementById("number1").value;

//     if (age > 18) {
//         alert("Your age is valid for Driving License.");
//     } 
//     else if (age == 18) {
//         alert("you are allowed for Learning license.");
//     } 
//     else {
//         alert("Your age is Not valid for Driving License.");
//     }
// }

function driving(){
    const number1 = document.getElementById("number1").value;
    if(number1 > 18){
        alert(`Your age is valid for Driving License.`)
    }
    else if (number1 == 18) {
        alert(`You are allowed for Learning license.`);
    } else {
        alert(`Your age is Not valid for Driving License.`);
    }
}