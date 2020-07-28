var obj = {name: "ISRO", age: 35, role: "Scientist"};
let myArr = [];
console.log(obj.length);
function convertListToObject(obj) {
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    for(let ind = 0 ; ind < keys.length ; ind++)
    {
        myArr.push(new Array(keys[ind],values[ind]));
    }
    console.log(myArr);
}
convertListToObject(obj);