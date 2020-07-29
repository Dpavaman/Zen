/*
Reverse a string
*/
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
    let arr = s.split("");
    arr.reverse();
  return arr.join("").toString(); 
}