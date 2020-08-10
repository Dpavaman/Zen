var division = document.createElement('div');
division.setAttribute('class','area');
var button = document.createElement('button');
button.setAttribute('id','button')
button.setAttribute('onclick','myFunction()')

button.appendChild(document.createTextNode('Generate'));
var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Unique 8 Digit Random Number Generator"))

division.appendChild(h1);
division.appendChild(button);
document.body.appendChild(division);

//******************************************************************************************************************************************************/
var field = document.createElement('h2');
field.appendChild(document.createTextNode(""))
division.appendChild(field);

function myFunction(min = 1, max = 9){
    var array = [];
    while(array.length < 8)
        {
        let result = Math.floor(Math.random() * (max - min + 1)) + min ;
        array.indexOf(result) == -1 ? array.push(result) : 0;
        }
        document.getElementById('result').innerHTML = array.join("");
    }
