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
// date=[2024,4,15]
// function newDate(date){
//     a=date.slice(0,1)
//     b=date.slice(1,2);
//     c=date.slice(2);
//     d=a + '-' + b + '-' + c
//     console.log(d)
// }
// newDate(date)


// array=[1,2,3,4,5];
// function square(array){
//     // array1=[];
//     const map1=array.map((x) => x*x)
//     // array1.push(map1);
//     return map1
// }

// const array2=square(array);
// console.log(array2);


// var string = "javascript";
// var count = 0;
// var compareCount = 0;
// function mostRepeatedChar(string){
//     for(i=0;i<string.length;i++){
//         for(j=i+1;j<string.length && j != i;j++){
//             if(string.charAt(i) == string.charAt(j)){
//                 count++;
//             }
//         }
//         if(count > compareCount){
//             compareCount = count ;
//             console.log(string[i])
//         }
//     }
//     return count;
// }
// console.log(mostRepeatedChar(string));

// // JavaScript program for the above approach

// // function that return maximum occurring character
// function getMaxOccurringChar(str)
// {

// 	// create map to store frequency of every character
// 	let mp = new Map();
	
// 	// to store length of string
// 	let n = str.length;
	
// 	// to store answer 
// 	let ans;
	
// 	// to check count of answer character is less or greater
// 	// than another elements count
// 	let cnt=0;
	
// 	// traverse the string 
// 	for(let i=0 ;i<n ; i++){
// 		// push element into map and increase its frequency 
// 		mp.set(str[i], (mp.get(str[i]) || 0) + 1);
		
// 		// update answer and count
// 		if(cnt < mp.get(str[i])){
// 			ans = str[i];
// 			cnt = mp.get(str[i]);
// 		}
// 	}
	
// 	return ans;
// }

// // Driver Code
// let str = "sample string aaamp";
// console.log("Max occurring character is: " + getMaxOccurringChar(str));

// // This code is contributed by rutikbhosale


// var number=[1,2,3,4,5,6];
// var target=4;

// function binarysearch(array,target){
//     var left=0; 
//     var right=array.length-1; 
//     while(left<=right){ 
//         var midindex=Math.ceil((left+right)/2); 
//         console.log(midindex, "midindex",array[midindex]) 
//         if (array[midindex]===target){ 
//             return midindex;
//         }
//         else if(array[midindex]<target){ 
//             console.log(array[midindex],target,"element is lesser than target");
//             left=midindex+1;
//         }
//         else if(array[midindex]>target){
//             console.log(array[midindex],target,"element is greater than target");
//             left=midindex-1;
//         }
//     }
// }

// const result=binarysearch(number,target)
// console.log(result)



// function getMaxOccurringChar(str)
// {
// 	let mp = new Map();
// 	let n = str.length;
// 	let ans;
// 	let cnt=0;
	
	
// 	for(let i=0 ;i<n ; i++){
// 		mp.set(str[i], (mp.get(str[i]) || 0) + 1);
		
// 		if(cnt < mp.get(str[i])){
// 			ans = str[i];
// 			cnt = mp.get(str[i]);
// 		}
// 	}
	
// 	return ans;
// }

// let str = "sample string";
// console.log("Max occurring character is: " + getMaxOccurringChar(str));

// function flattenArray(arr) {
//     let flattenedArray = [];

//     // Helper function to flatten nested arrays
//     function flatten(arr) {
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 // Recursively flatten nested arrays
//                 flatten(arr[i]);
//             } else {
//                 // Push non-array elements to the flattenedArray
//                 flattenedArray.push(arr[i]);
//             }
//         }
//     }

//     // Call the helper function with the input array
//     flatten(arr);

//     return flattenedArray;
// }

// // Example usage:
// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(nestedArray)); 


function firstNonRepeatedChar(str) {
    // Create an object to store character frequencies
    let charCount = {};

    // Iterate through the string to count character frequencies
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If all characters are repeated, return null
    return null;
}

// Example usage:
console.log(firstNonRepeatedChar("hello")); // Output: "h"
console.log(firstNonRepeatedChar("abracadabra")); // Output: "c"
console.log(firstNonRepeatedChar("aaaa")); // Output: null
