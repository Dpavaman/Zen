var arr = ["GUVI", "I", "am", "a geek"];
var newObject = {};
let key  = arr[0];
let value = arr[arr.length-1];
function transformFirstAndLast(arr) {
    newObject[key] = value;
 console.log(newObject);
}
transformFirstAndLast(newObject);