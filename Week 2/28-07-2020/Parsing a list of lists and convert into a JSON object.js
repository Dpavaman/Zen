var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let ind = 0 ; ind < arr.length ; ind++)
 {
     for(let inn = 0 ; inn < arr[ind].length-1 ; inn++)
     {
         newObject[arr[ind][inn]] = arr[ind][inn+1];
     }
 }
 
 console.log(newObject);
}
fromListToObject(arr)