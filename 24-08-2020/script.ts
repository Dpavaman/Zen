var chunk = (array,chunkFrequency) =>{
    return array.reduce((initial,iterator, index) =>{
        return index % chunkFrequency === 0 ? [...initial,[iterator]] : [...initial.slice(0,-1), [...initial.slice(-1)[0],iterator]]
    },[]);
}

var reduce = (array) =>{
    return array.reduce((total,element)=>{
        return total+element;
    })
}

var filter = (array) =>{
    return array.filter((element) =>{
        return element % 2 === 0;
    })
}

var find = (array)=>{
    var Index = "";
    var isMatch=false;
     for (var a = 0; a < array.length; a++) {
         for (var b = a+1; b < array.length; b++) {
             if (array[a] === array[b]){
                 Index = array.indexOf(array[a]);
                 isMatch=true;
                 break;
           }
         }
            if (isMatch) {break;}
     }
    return Index;    
}

var sum = (array) =>{
    var sum = 0;
    for(let ind = 0 ; ind < array.length ; ind++)
    {
        sum+= array[ind];
    } 
    return sum;
}

 var doChunk = () => {
     confirm(`Chunk will destructure the array based on the frequency specified. 
     
Do Specify the Frequency for Chunk operation in Next Step..:)

and to check the output open console tab of element inspection if you have not opened yet..!`);
     let frequency = prompt('Specify the Chunk Frequency');
     let result = (document.getElementById('input') as HTMLInputElement).value;
     let array = result.split(" ").map(Number);
    console.log(chunk(array,frequency));
}

var doReduce = () =>{
    confirm(`This Reduce function is written to add all the below entered elements. 

This will reduce the array of below entered numbers to a single Value equal to their Sum.

and to check the output open console tab of element inspection if you have not opened yet..!`);
    let result = (document.getElementById('input') as HTMLInputElement).value;
    let array = result.split(" ").map(Number);
    console.log(reduce(array));
}

var doFilter = () =>{
    confirm(`This Filter function is written to display all the Even numbers out of below entered elements. 

This will display an array of filtered elements which are even numbers. 

and to check the output open console tab of element inspection if you have not opened yet..!`);
    let result = (document.getElementById('input') as HTMLInputElement).value;
    let array = result.split(" ").map(Number);
    console.log(filter(array));
}

var doSum = () =>{
    confirm(`This Sum function is written to display sum of below entered elements on console window. 

Sum will display the result as that of reduce, but the code used for both is different. 

and to check the output open console tab of element inspection if you have not opened yet..!`);
    let result = (document.getElementById('input') as HTMLInputElement).value;
    let array = result.split(" ").map(Number);
    console.log(sum(array));
}


var doFind = () =>{
    confirm(`Lodash _.find returns the first element predicate returns truthy for. 

This Find function is written to console the first repeating element out of given numbers and it's Index.

and to check the output open console tab of element inspection if you have not opened yet..!`);
    let result = (document.getElementById('input') as HTMLInputElement).value;
    let array = result.split(" ").map(Number);
    
    if(array[find(array)] === undefined)
    {
        console.log(`Index: None`);
        console.log(`Value: No Duplicate Here..!`);
    }
    else{
        console.log(`Index: ${find(array)}`);
        console.log(`Value: ${array[find(array)]}`);
    }
    
}
