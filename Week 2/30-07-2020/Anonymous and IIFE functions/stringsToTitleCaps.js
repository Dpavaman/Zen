//Print all the strings to title caps in the array
var arr = ["hello","john","greetings","some","gibberish","etc"];

var titleCaps = function(arr)
{
    for(let ind = 0 ; ind < arr.length ; ind++)
    {
        console.log(arr[ind][0].toUpperCase() + arr[ind].slice(1));
    }
}
titleCaps(arr);

// Anonymous function ends here

//-----------------------------------------------------------------------------------------------------------------------------------

//IIFE

(function(arr)
{
    for(let ind = 0 ; ind < arr.length ; ind++)
    {
        console.log(arr[ind][0].toUpperCase() + arr[ind].slice(1));
    }
})(arr);