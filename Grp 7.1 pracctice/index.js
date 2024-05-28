// array=["rohit","rahul","virat","rishabh","shivam","virat","virat"]

// for(var i=0; i<array.length;i++){
//     if(array[i]=="akshay"){
//         console.log(array[i])
//     }
//     else{
//         var a="Name does not exist."
//     }
// }
// console.log(a)


// function primenumber(number){
//     for(var i=2;i<=number-1;i++){
//         if(number%i===0){
//             var b=true;
//         }
//         console.log(i)
//     }
//     if(b===true){
//         console.log("Not Prime")
//     }
//     else{
//         console.log("Prime")
//     }
// }


// primenumber(7)

// for (var i = 0; i < 5; i++) {
//     var c = "";
    
//     for (var j = 0; j <= i; j++) {
//         c = c + "*";
//     }
    
//     console.log(c);
// }

// let rows = 6; 
// let char = "";

// // External loop
// for (let i = 1; i <= rows; i++) {
//   // Internal loop
//   for (let j = 1; j <= i; j++) {
//     char += j;
//   }
//   char += "\n";
// }
// console.log(char);

// Q6.

// var str3=[];
// var str4='';
// function duplicateletter(str){
//     for(var i=0;i<str.length;i++){
//         var str2='';
//         str2 += str[i]+str[i];
//         str3.push(str2);
//     }
//     const joinletters = (a,b)=>a+b;
//     str3.forEach((str3)=>{
//         str4=joinletters(str4,str3)
//     });
//     // console.log(str3);
//     console.log(str4);
// }

// duplicateletter("hello")

rows=5;
char='';
for(var i=1;i<=rows;i++){
    for(var j=1;j<=i;j++){
        char+=j;
        // console.log(j)
    }
    char+="\n"
    // console.log(i)
}
console.log(char)

// for(var i=5;i>=1;i--){
//     console.log(i)
// }

// rows=5;
// char='';
// for(var i=rows;i>=1;i--){
//     for(var j=5;j>=i;j--){
//         char+=j;
//         // console.log(j)
//     }
//     char+="\n"
//     // console.log(i)
// }
// console.log(char)

// n=5;
// var char='';
// for(var i=1;i<=n;i++){
//     for(var j=1;j<=n-i+1;j++){
//         // console.log(j,"j")
//         char+=j;
//     }
//     char+='\n';
//     console.log(i,"i")
// }
// console.log(char)