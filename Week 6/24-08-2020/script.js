var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var chunk = function (array, chunkFrequency) {
    return array.reduce(function (initial, iterator, index) {
        return index % chunkFrequency === 0 ? __spreadArrays(initial, [[iterator]]) : __spreadArrays(initial.slice(0, -1), [__spreadArrays(initial.slice(-1)[0], [iterator])]);
    }, []);
};
var reduce = function (array) {
    return array.reduce(function (total, element) {
        return total + element;
    });
};
var filter = function (array) {
    return array.filter(function (element) {
        return element % 2 === 0;
    });
};
var find = function (array) {
    var Index = "";
    var isMatch = false;
    for (var a = 0; a < array.length; a++) {
        for (var b = a + 1; b < array.length; b++) {
            if (array[a] === array[b]) {
                Index = array.indexOf(array[a]);
                isMatch = true;
                break;
            }
        }
        if (isMatch) {
            break;
        }
    }
    return Index;
};
var sum = function (array) {
    var sum = 0;
    for (var ind = 0; ind < array.length; ind++) {
        sum += array[ind];
    }
    return sum;
};
var doChunk = function () {
    confirm("Chunk will destructure the array based on the frequency specified. \n     \nDo Specify the Frequency for Chunk operation in Next Step..:)\n\nand to check the output open console tab of element inspection if you have not opened yet..!");
    var frequency = prompt('Specify the Chunk Frequency');
    var result = document.getElementById('input').value;
    var array = result.split(" ").map(Number);
    console.log(chunk(array, frequency));
};
var doReduce = function () {
    confirm("This Reduce function is written to add all the below entered elements. \n\nThis will reduce the array of below entered numbers to a single Value equal to their Sum.\n\nand to check the output open console tab of element inspection if you have not opened yet..!");
    var result = document.getElementById('input').value;
    var array = result.split(" ").map(Number);
    console.log(reduce(array));
};
var doFilter = function () {
    confirm("This Filter function is written to display all the Even numbers out of below entered elements. \n\nThis will display an array of filtered elements which are even numbers. \n\nand to check the output open console tab of element inspection if you have not opened yet..!");
    var result = document.getElementById('input').value;
    var array = result.split(" ").map(Number);
    console.log(filter(array));
};
var doSum = function () {
    confirm("This Sum function is written to display sum of below entered elements on console window. \n\nSum will display the result as that of reduce, but the code used for both is different. \n\nand to check the output open console tab of element inspection if you have not opened yet..!");
    var result = document.getElementById('input').value;
    var array = result.split(" ").map(Number);
    console.log(sum(array));
};
var doFind = function () {
    confirm("Lodash _.find returns the first element predicate returns truthy for. \n\nThis Find function is written to console the first repeating element out of given numbers and it's Index.\n\nand to check the output open console tab of element inspection if you have not opened yet..!");
    var result = document.getElementById('input').value;
    var array = result.split(" ").map(Number);
    if (array[find(array)] === undefined) {
        console.log("Index: None");
        console.log("Value: No Duplicate Here..!");
    }
    else {
        console.log("Index: " + find(array));
        console.log("Value: " + array[find(array)]);
    }
};
