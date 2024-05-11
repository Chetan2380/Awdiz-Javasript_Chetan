array=["rohit","rahul","virat","rishabh","shivam","virat","virat"]

for(var i=0; i<array.length;i++){
    if(array[i]=="akshay"){
        console.log(array[i])
    }
    else{
        var a="Name does not exist."
    }
}
console.log(a)


function primenumber(number){
    for(var i=2;i<=number-1;i++){
        if(number%i===0){
            var b=true;
        }
        console.log(i)
    }
    if(b===true){
        console.log("Not Prime")
    }
    else{
        console.log("Prime")
    }
}


primenumber(7)

for (var i = 0; i < 5; i++) {
    var c = "";
    
    for (var j = 0; j <= i; j++) {
        c = c + "*";
    }
    
    console.log(c);
}

let rows = 6; 
let char = "";

// External loop
for (let i = 1; i <= rows; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    char += j;
  }
  char += "\n";
}
console.log(char);