var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 var myArray = Object.values(obj);
 console.log(myArray);
}
printAllValues(obj);