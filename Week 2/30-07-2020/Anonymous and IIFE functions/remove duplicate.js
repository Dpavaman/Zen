//remove duplicate application
var array = [2,3,5,4,12,45,23,2,3,1,2,6,45,100];
var removeDuplicates = function(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};
console.log(removeDuplicates(array));