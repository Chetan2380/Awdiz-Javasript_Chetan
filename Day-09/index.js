count=0;
array=[1,2,3,4,5,6];
target=5;
console.log(array)
for(var i=0; i<array.length; i++)
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
// console.log("Count  ",count)