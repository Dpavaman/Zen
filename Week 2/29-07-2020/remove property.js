/*
Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the given object.
Input:
removeProperty(obj, “name”);
Output:
undefined
*/
var obj = {
    name: "value"
   };
function removeProperty(obj, key){
 delete obj[key];
 console.log(obj)
}
removeProperty(obj, "name");
