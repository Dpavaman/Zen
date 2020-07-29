/*
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
*/

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = [];
 let count = 0;
 let sum = 0 ;
function countPositivesSumNegatives(arr) {
 for(let ind = 0 ; ind < arr.length ; ind++)
 {
    if(arr[ind] > 0)
    {
        count++;
        
    }
    else{
        sum = sum + arr[ind];
    }
 }
 ar2.push(count);
 ar2.push(sum);
 console.log(ar2);
}
countPositivesSumNegatives(arr);