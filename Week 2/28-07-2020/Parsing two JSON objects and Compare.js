var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected){
 if(JSON.stringify(expected)===JSON.stringify(actual))
 {
     console.log("Passed")
 }
 else
 {
     console.log("FAILED [my test] Expected", expected , " but got", actual);
 }
}
assertObjectsEqual(actual, expected);