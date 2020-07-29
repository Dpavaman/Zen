/*
Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

Input:
isEven(12);
isEven(0);
isEven(11);
isEven(“11h”);
Output:
true
true
false
-1 
*/

function isEven(num){
 if(typeof(num) === "number")
 {
     if(num % 2 === 0)
     {
         return true;
     }
     else{
         return false;
     }
 }
 else{
     return "-1";
 }
}
var even = isEven("5a");
console.log(even);