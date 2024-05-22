//Q1.
// array=[1,2,3,4,5];
// function square(array){
//     array1=[];
//     for(var i=0;i<array.length;i++){
//         // console.log(array[i])
//         var squre1=array[i]*array[i];
//         array1.push(squre1);
//     }
//     return array1
// }

// const array2=square(array);
// console.log(array2);

// Q2.

// function palindrome(name){
//     var str=""
//     for(var i=name.length-1;i>=0;i--){
//         // console.log(name[i])
//         str+=name[i];
//     }
//     if(name===str){
//         console.log("True")
//     }
//     else{
//         console.log("False")
//     }
// }
// palindrome("madam")

// Q3.
// array1=[1,2,3,4];
// array2=[3,4,5,6];

// array3=[]

// function common(array1,array2){
//     for(var i=0;i<array1.length;i++){
//         for(var j=0;j<array2.length;j++){
//             // console.log(array1[i],array2[j])
//             if(array1[i]===array2[j]){
//                 array3.push(array1[i])
//             }
//         }
//     }
//     return array3
// }

// const array4=common(array1,array2);
// console.log(array4)

// Q4.
// var info={name:"Alice",age:25}
// function fetchkeyvalue(){
//     console.log(info.name)
// }
// fetchkeyvalue(info)

// Q5.

// var number2=[];
// function todigit(number){
//     var number1;
//     number1=number.toString();
//     for(var i=0;i<number1.length;i++){
//         number3=i+1;
//         number2.push(number3)
//     }
//     // number3=number1.split('')
    
//     return number2;
// }
// const numarray=todigit(12345);
// console.log(numarray)


// Q6.

// function duplicateletter(str){
//     var str2='';
//     for(var i=0;i<str.length;i++){
        
//         str2 += str[i]+str[i];
//         // console.log(str2);
//     }
//     return str2;
// }

// console.log(duplicateletter("hello"))


// Q7.
// var info=[{name:"Alice"},{name:"Bob"},{name:"Charlie"}]
// function fetchkeyvalue(){
//     for (let key in info) {
//         console.log(info[key]);
//       }
// }
// fetchkeyvalue(info)

// Q8.
// function countwords(sentence){
//     var count=0;
//     for(var i=0;i<sentence.length;i++){
//         if (sentence[i]===" ")
//             count++
//     }
//     count++;
//     console.log(count)
// }

// countwords("This is a sample sentence")



// Q9.
// array=[10, 2, 14, 5, 7]
// function secondsmallest(array){
//     array.sort((a,b)=>a-b);
//     return array[1];
// }

// console.log(secondsmallest(array))


// Q10.
date=[2024,4,15]
function newDate(date){
    a=date.slice(0,1)
    b=date.slice(1,2);
    c=date.slice(2);
    d=a + '-' + b + '-' + c
    console.log(d)
}
newDate(date)


// array=[1,2,3,4,5];
// function square(array){
//     array1=[];
//     const map1=array.map((x) => x*x)
//     // array1.push(map1);
//     return map1
// }

// const array2=square(array);
// console.log(array2);