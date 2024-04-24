var number = 38;

if (number % 2 === 0) {
  console.log(`Number ${number} is Even`);
} else {
  console.log(`Number ${number} is Odd`);
}

function evenodd(){
    const number1 = document.getElementById("number1").value;
    if(!number1){
        alert(`Please enter number.`)
    }
    else if (number1 % 2 === 0) {
        alert(`Number ${number1} is Even`);
    } else {
        alert(`Number ${number1} is Odd`);
    }
}