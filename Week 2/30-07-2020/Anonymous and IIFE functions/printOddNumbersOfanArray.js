// Anonymous Function:
var arr =[21,28,2,81,57,60,93,56,31,12,101];

var anonymousOdd = function(arr){
    for(let ind = 0 ; ind < arr.length ; ind++)
    {
        if(arr[ind] % 2 !== 0 )
        {
            console.log(arr[ind]);
        }
    }
}
anonymousOdd(arr);
/*
Anonymous function ends here..
*/
//-----------------------------------------------------------------------------------------------------------------------------------

//IIFE

(function(arr){
    for(let ind = 0 ; ind < arr.length ; ind++)
    {
        if(arr[ind] % 2 !== 0 )
        {
            console.log(arr[ind]);
        }
    }
})(arr);

/*
IIFE ends here.
*/

