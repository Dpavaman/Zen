// Sum of all the elements in the array 
var arr = [20,35,95,67,43,38,45];
const getSum = arr.reduce((currentTotal,num)=>{
    return currentTotal + num ;
},0);

console.log(getSum);

//Anonymous Function Ends here.

//IIFE

var arr = [20,35,95,67,43,38,45];
(function (arr){
    console.log(arr.reduce((currentTotal,num)=>
    {
        return currentTotal + num ;
    },0));
})(arr);

//IIFE ends here.