/*
Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

Input:
getFullName(“GUVI”, “GEEK”);
getFullName(“GUVI”, );
getFullName(, “GEEK”);
getFullName(“”, “”);
Output:
“GUVI GEEK”
“GUVI”
“GEEK”
“”
*/

function getFullName(firstName, lastName){
 return firstName + " " +  lastName;
}
var str = getFullName("GUVI", "GEEK");
console.log(str);