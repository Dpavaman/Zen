/*
Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
Examples
CountAnimals(2, 3, 5) ➞ 36
CountAnimals(1, 2, 3) ➞ 22
CountAnimals(5, 2, 8) ➞ 50
*/

function CountAnimals(tur,horse,pigs) {
    return (tur*2)+(horse*4)+(pigs*4);

}
var legs = CountAnimals(2,3,5)
console.log(legs);