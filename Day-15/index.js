var number=[1,2,3,4,5,6,7,8,9,10];
var target=10;

function binarysearch(array,target){
    var left=0; //0 5 8 9
    var right=array.length-1; //9
    while(left<=right){ //0 <=9 True || 5<=9 True|| 8<=9 True || 9<=9 True 
        var midindex=Math.floor((left+right)/2); //4 7 8 9
        console.log(midindex, "midindex",array[midindex]) //4,5 || 7,8 || 8,9 || 9,10
        if (array[midindex]===target){ //5===10 false || 8===10 False || 9 === 10 False
            return midindex;
        }
        else if(array[midindex]<target){ //4+1=5<10 True || 7+1=8<10 True || 8+1=9<10 True
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
