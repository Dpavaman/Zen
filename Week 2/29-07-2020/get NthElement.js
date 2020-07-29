/*  
Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
Input:
getNthElement([1, 3, 5], 1);
Output:
3
*/

function getNthElement(array,n){
 return array[n];
}
var res = getNthElement([1, 3, 5], 1);
console.log(res);