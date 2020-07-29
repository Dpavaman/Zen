/*
Create a function that receives an array of numbers and returns an array containing only the positive numbers
*/
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = [];
function getPositives(ar)
{
 for(let ind = 0 ; ind < ar.length ;  ind++)
 {
     if(ar[ind] > 0)
     {
         ar2.push(ar[ind])
     }
 }
 console.log(ar2);
}
getPositives(ar);