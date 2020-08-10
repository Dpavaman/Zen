/*var division = document.createElement('div');
division.setAttribute('class','area');
var button = document.createElement('button');
button.setAttribute('id','button')
button.setAttribute('onclick','ageCalculate()')

button.appendChild(document.createTextNode('Generate'));
var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("AGE CALCULATOR"))

division.appendChild(h1);
division.appendChild(button);
document.body.appendChild(division);

var inpSec = document.createElement('div')
var input = document.createElement('input')
input.setAttribute('id','date')
input.setAttribute('type','date')
input.setAttribute('class','dateInput');
inpSec.appendChild(input);
document.body.appendChild(inpSec);

*/



//*******************************************************************************************************************************************************/
/*
function ageCalculate(){
    document.getElementById('container').style.display = 'flex';
    var birthDate =document.getElementById('date').value;
 
     var date= new Date(birthDate);
 
         var mdate = birthDate.toString();
         var yearThen = parseInt(mdate.substring(0,4), 10);
         var monthThen = parseInt(mdate.substring(5,7), 10);
         var dayThen = parseInt(mdate.substring(8,10), 10);
         
         var today = new Date();
         var birthday = new Date(yearThen, monthThen-1, dayThen);
 
         var differenceInMilisecond = today.valueOf() - birthday.valueOf();
 
         
         var year_age = Math.floor(differenceInMilisecond / 31536000000);
         var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
         
         
         var month_age = Math.floor(day_age/30);
         
         day_age = day_age % 30;
         
         var tMnt= (month_age + (year_age*12));
         var tDays =(tMnt*30) + day_age;
         
             document.getElementById("container").innerHTML = year_age + " years " + month_age + " months " + day_age + " days"
             + "<br/> or <br/> " 
             + tMnt + " months " + day_age + " days" 
             + "<br/> or <br/>" 
             +  tDays + " days" 
             + "<br/> or <br/>" 
             +  tDays*24 + " hours" 
             + "<br/> or <br/>" 
             +  tDays*24*3600 + " seconds" 
             + "<br/> or <br/>" 
             +  tDays*24*3600*1000 + " miliseconds" ;
 
 
 }
*/

//******************************************************************************************************************************************************/

function ageCalculate(){
    
    var birthDate =document.getElementById('birth_date').value;
 
     var d = new Date(birthDate);
 
         var mdate = birthDate.toString();
         var yearThen = parseInt(mdate.substring(0,4), 10);
         var monthThen = parseInt(mdate.substring(5,7), 10);
         var dayThen = parseInt(mdate.substring(8,10), 10);
         
         var today = new Date();
         var birthday = new Date(yearThen, monthThen-1, dayThen);
 
         var differenceInMilisecond = today.valueOf() - birthday.valueOf();
 
         
         var year_age = Math.floor(differenceInMilisecond / 31536000000);
         var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
         
         
         var month_age = Math.floor(day_age/30);
         
         day_age = day_age % 30;
         
         var tMnt= (month_age + (year_age*12));
         var tDays =(tMnt*30) + day_age;
         
             document.getElementById("age").innerHTML = "<br/>" +year_age + " years " + month_age + " months " + day_age + " days"
             + "<br/>  <br/> " 
             + tMnt + " months " + day_age + " days" 
             + "<br/>  <br/>" 
             +  tDays + " days" 
             + "<br/>  <br/>" 
             +  tDays*24 + " hours" 
             + "<br/>  <br/>" 
             +  tDays*24*3600 + " seconds" 
             + "<br/>  <br/>" 
             +  tDays*24*3600*1000 + " miliseconds" ;
 
 
 }