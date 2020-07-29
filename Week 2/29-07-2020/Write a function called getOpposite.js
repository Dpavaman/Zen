function getOpposite(num) {
    if(num > 0 && Math.floor(num) - num === 0)
    {
        console.log(num * -1);
    }
    else if(num <0)
    {
        console.log(Math.abs(num));
    }
    else if(num === 0)
    {
        console.log("0");
    }
    else
    {
        console.log("-1")
    }
}
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5);