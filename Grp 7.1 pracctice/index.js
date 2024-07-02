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

// rows=5;
// char='';
// for(var i=1;i<=rows;i++){
//     console.log(i, "i")
//     for(var j=1;j<=i;j++){
//         console.log(j,"j")
//         char+=j;
//         // console.log(j)
//     }
//     char+="\n"
//     // console.log(i)
// }
// console.log(char)

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

n=5;
var char='';
for(var i=1;i<=n;i++){
    console.log(i,"i")
    for(var j=1;j<=n-i+1;j++){
        console.log(n-i+1, "n-i+1")
        console.log(j,"j")
        // console.log(j,"j")
        char+=j;
    }
    char+='\n';
    
}
console.log(char)

// const myUnixTimestamp = 1718259671; // start with a Unix timestamp

// const myDate = new Date(myUnixTimestamp * 1000); // convert timestamp to milliseconds and construct Date object

// console.log(myDate); // will print "Thu Aug 10 2023 01:13:20" followed by the local timezone on browser console
// console.log(myDate.toISOString().split('T')[0]); // will print "2023-08-10T01:13:20.000Z"
// console.log(myDate.toLocaleString().split(',')[0]); // output will vary based on system locale settings

// var InsituteDetails = {
//     name: "Awdiz",
//     age: 12,
//     location: "Vashi",
//     isOpen: true,
//     courses: [
//       "Full stack Development",
//       "CCNA",
//       "WINDOWS",
//       "LINUX",
//       ["Hi", "Welcome", "target"],
//     ],
//     batchesDetails: { totalBatches: 50, totalStudents: 500 },
//   };

// // console.log(InsituteDetails.batchesDetails);
// // console.log(InsituteDetails.courses);
// // console.log(InsituteDetails.location);
// // console.log(InsituteDetails.batchesDetails.totalStudents)

// // console.log(InsituteDetails["name"])
// // console.log(InsituteDetails["age"])
// // console.log(InsituteDetails["courses"].length)

// // const keys = Object.keys(InsituteDetails);
// // console.log(keys);
// // const values = Object.values(InsituteDetails);
// // console.log(values);

// subarray=InsituteDetails.courses[4];
// console.log(subarray);
// console.log(subarray[2]);

// // for(var i=0;i<subarray.length;i++){
// //   if(subarray[i]==="target"){
// //     console.log(i)
// //   }
// // }

// // for (let key in InsituteDetails) {
// //   console.log(key, InsituteDetails[key]);
// // }

// var response={forecast:[{day:"wed", date:20202024,high:80},{day:"tue", date:20202024,high:80}]};
// console.log(response.forecast[0].day);









