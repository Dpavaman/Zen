var object = {name: "RajiniKanth", age: 33, hasPets : false};
function printAllKeys(object) {
    var myArray = Object.keys(object);
    console.log(myArray);
}
printAllKeys(object);