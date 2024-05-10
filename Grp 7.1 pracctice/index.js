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