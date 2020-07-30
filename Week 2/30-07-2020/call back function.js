//call back function:
const operators = [add,sub,mul];

function callback(ind, operators){
    return operators[ind];
}

function add()
{
    return 200+100;
}

function sub()
{
    return 200 - 100;
}

function mul()
{
    return 200*100;
}


//instead of storing a the executed function in another variable, directly executed the functions by calling them in console.log();
console.log(callback(0,operators)());  //prints 3000
console.log(callback(1,operators)());  // prints 100
console.log(callback(2,operators)());  //prints 20000