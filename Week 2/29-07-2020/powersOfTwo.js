/*
Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
n = 0 -> 2⁰ -> [1]
n = 1 -> 2⁰, 2¹ -> [1,2]
n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
Input:
powersOfTwo(0)
powersOfTwo(1)
powersOfTwo(2)
Output:
1
1,2
1,2,4
*/
var arr = [];
function powersOfTwo(n){

    
  for(let ind = 0 ; ind < n ; ind++)
  {
    let power = Math.pow(2,ind);
    arr.push(power);
  }
  console.log(arr);
}
powersOfTwo(0);
powersOfTwo(1);
powersOfTwo(2);