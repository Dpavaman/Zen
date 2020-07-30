// rotate array
var array = [2,3,5,4,12,45,23,2,3,1,2,6,45,100];
var rotate = function(arr,k){
    let i = 0;
    while(i < k){
        arr.unshift(arr.pop());
        i++
    }
    return arr;
}
console.log(rotate(array,2));

//Anonymous function ends here.

//IIFE

//remove duplicate application
var array = [2,3,5,4,12,45,23,2,3,1,2,6,45,100];
 (function(arr,k){
    let i = 0;
    while(i < k){
        arr.unshift(arr.pop());
        i++
    }
    console.log(arr);
})(array,1);

//IIFE ends here.