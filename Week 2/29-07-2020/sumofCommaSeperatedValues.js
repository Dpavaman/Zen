/*
Calculate the sum of numbers received in a comma delimited string
*/
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{   let sum = 0
    var arr = s.split(",").map(parseFloat);
  for(let ind = 0 ; ind < arr.length ; ind++)
  {
    sum = sum + arr[ind];
  }
  console.log(sum);
}