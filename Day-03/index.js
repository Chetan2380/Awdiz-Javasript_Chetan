// Difference between var let const
// 1. Redeclare and reassign
//          redeclare       reassign
// var ->   possible        possible
// let ->   not possible    possible
// const->  not possible    not possible

// 2. Scope

// var - global scope
// let const - block scope

// 3. Hoisting
// var - hoisting applicable
// let const - hoisting not applicable

// 2. Scope

// console.log("Hii");

// console.log("Hii 2");

console.log("-----------------------------Scope = Var, Let, COnst executed in different blocks-----------------------------")
function Greeting() {
    console.log("Awdiz");
  }
  console.log(Greeting());
  
  {
    var number = 200;
  }
  console.log(number);
  
  {
    let number = 140;
  }
  console.log(number);
  
  {
    let number = 110;
    {
      console.log(number);
    }
  }
  
  console.log(number);

  console.log("-----------------------------Scope = Var, Let, COnst executed in one parent block and there childrens-----------------------------")
  let firstName = "Virat";
  {
    const secondName = "Hardik";
    var thirdName = "Dhoni";
    console.log(firstName);
    {
      {
        console.log(thirdName);
        console.log(firstName);
      }
      console.log(secondName);
    }
  }
  console.log(thirdName);
  
  console.log("-----------------------------Hoisting-----------------------------")
  myname = "Chetan";
  console.log(myname);
  
  var myname;
  
  
  myname = "Sanju";
  console.log(myname);
  
//   let myname;