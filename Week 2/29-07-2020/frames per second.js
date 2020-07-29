/*
Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
Examples
frames(1, 1) ➞ 60
frames(10, 1) ➞ 600
frames(10, 25) ➞ 24
*/
function frames(num1,num2) {
    return (num1*60)/num2;
}
var fps = frames(10,25)
console.log(fps);