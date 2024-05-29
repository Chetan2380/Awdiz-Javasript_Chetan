var number=[1,2,3,4,5,6];
var target=4;

function binarysearch(array,target){
    var left=0; 
    var right=array.length-1;
    while(left<=right){
        var midindex=Math.floor((left+right)/2); 
        console.log(midindex, "midindex",array[midindex]) 
        if (array[midindex]===target){
            return midindex;
        }
        else if(array[midindex]<target){ 
            console.log(array[midindex],target,"element is lesser than target");
            left=midindex+1;
        }
        else if(array[midindex]>target){
            console.log(array[midindex],target,"element is greater than target");
            left=midindex-1;
        }
    }
}

const result=binarysearch(number,target)
console.log(result)
