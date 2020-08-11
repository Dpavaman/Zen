var container = document.createElement('div');
container.setAttribute('class','container');
container.setAttribute('id','container');
//------------------------------------------------------------Container Created------------------------------------------------------------------
var H1 = document.createElement('h1');
H1.innerText = "Registration Form";
container.appendChild(H1);
//-----------------------------------------------------------Form Heading Appended---------------------------------------------------------------
container.appendChild(document.createElement('hr'));
var formDivision = document.createElement('div');
//----------------------------------------------------------Division for Form created-------------------------------------------------------------
formDivision.setAttribute('class','formDivision');
var form = document.createElement('form');
form.setAttribute('id','myForm');
form.setAttribute('onsubmit','fn1(); return false;');
//----------------------------------------------------------Form Tag Created-----------------------------------------------------------------------
var firstNameLabel = document.createElement('label');
firstNameLabel.setAttribute('for','firstName');
firstNameLabel.innerText = 'First Name'
form.appendChild(firstNameLabel);

var firstName = document.createElement('input');
firstName.placeholder='First Name'
firstName.autocomplete = 'off';
firstName.id = 'firstName';
firstName.type = 'text';
firstName.name = 'firstName';
firstName.maxLength = '15'
firstName.required = 'true';
form.appendChild(firstName)
//-----------------------------------------------------Label and Input Box for First Name Created--------------------------------------------------
form.appendChild(document.createElement('br'))
var lastNameLabel = document.createElement('label');
lastNameLabel.setAttribute('for','lastName');
lastNameLabel.innerText = 'Last Name'
form.appendChild(lastNameLabel);

var lastName = document.createElement('input');
lastName.placeholder='Last Name'
lastName.autocomplete = 'off';
lastName.id = 'lastName';
lastName.type = 'text';
lastName.maxLength = '15'
lastName.name = 'lastName';
lastName.required = 'true';
form.appendChild(lastName)

//-----------------------------------------------------------Label and Input Box for Last Name is Created------------------------------------------
form.appendChild(document.createElement('br'))
var addressLine1Label = document.createElement('label');
addressLine1Label.setAttribute('for','addressline1');
addressLine1Label.innerText = 'Address Line 1'
form.appendChild(addressLine1Label);

var addressLine1 = document.createElement('input');
addressLine1.placeholder='Address Line1'
addressLine1.autocomplete = 'off';
addressLine1.id = 'addressline1';
addressLine1.type = 'text';
addressLine1.maxLength = '40'
addressLine1.name = 'addressline1';
addressLine1.required = 'true';
form.appendChild(addressLine1);

form.appendChild(document.createElement('br'))
var addressLine2Label = document.createElement('label');
addressLine2Label.setAttribute('for','addressline2');
addressLine2Label.innerText = 'Address Line 2'
form.appendChild(addressLine2Label);

var addressLine2 = document.createElement('input');
addressLine2.placeholder='Address Line2'
addressLine2.autocomplete = 'off';
addressLine2.id = 'addressline2';
addressLine2.type = 'text';
addressLine2.maxLength = '30'
addressLine2.name = 'addressline2';
addressLine2.required = 'true';
form.appendChild(addressLine2);
//-----------------------------------------------------------Label and Input Box for Address is Created------------------------------------------
form.appendChild(document.createElement('br'))
var pincodeLabel = document.createElement('label');
pincodeLabel.setAttribute('for','pincode');
pincodeLabel.innerText = 'PIN Code'
form.appendChild(pincodeLabel);

var pincode = document.createElement('input');
pincode.placeholder='PIN Code'
pincode.autocomplete = 'off';
pincode.id = 'pincode';
pincode.type = 'text';
pincode.minLength = '6';
pincode.maxLength = '6'
pincode.name = 'pincode';
pincode.required = 'required';
form.appendChild(pincode);
//--------------------------------------------------------PIN Code Label and Box are created--------------------------------------------------------
form.appendChild(document.createElement('br'));
var genderLabel = document.createElement('label');
genderLabel.innerText = 'Choose Gender';
genderLabel.setAttribute('style','margin-top:15px;float: left !important;')
form.appendChild(genderLabel);


var male = document.createElement('input');
male.setAttribute('type','radio');
male.setAttribute('id','male');
male.setAttribute('value','Male');
male.setAttribute('name','gender');
male.setAttribute('required','required');
var maleLabel = document.createElement('label')
maleLabel.setAttribute('for','male');
maleLabel.setAttribute('style','width: 50px !important;')
maleLabel.innerText = 'Male';

var female = document.createElement('input');
female.setAttribute('type','radio');
female.setAttribute('id','female');
female.setAttribute('value','Female');
female.setAttribute('name','gender');
female.setAttribute('required','required');
var femaleLabel = document.createElement('label');
femaleLabel.setAttribute('for','female');
femaleLabel.setAttribute('style','margin-top:15px;width: 50px !important;')
femaleLabel.innerText = 'Female';

form.appendChild(male);
form.appendChild(maleLabel);
form.appendChild(female);
form.appendChild(femaleLabel);

//-------------------------------------------------------Gender Selection Radio's Completed-------------------------------------------------------
form.appendChild(document.createElement('br'))
var foodLabel = document.createElement('label');
foodLabel.setAttribute('for','food');
foodLabel.innerText = 'Enter Your Favourite Food'
form.appendChild(foodLabel);

var food1 = document.createElement('input');
food1.placeholder='Enter Food 1 Here'
food1.autocomplete = 'off';
food1.id = 'food1';
food1.type = 'text';
food1.maxLength = '20'
food1.name = 'food1';
//food1.required = 'required';
form.appendChild(food1);

form.appendChild(document.createElement('br'))
var food2 = document.createElement('input');
food2.placeholder='Enter Food 2 Here'
food2.autocomplete = 'off';
food2.setAttribute('style','margin-left: 48% !important;')
food2.id = 'food2';
food2.type = 'text';
food2.maxLength = '20'
food2.name = 'food2';
//food2.required = 'required';
form.appendChild(food2);

form.appendChild(document.createElement('br'))
var food3 = document.createElement('input');
food3.placeholder='Enter Food 3 Here'
food3.autocomplete = 'off';
food3.setAttribute('style','margin-left: 48% !important;')
food3.id = 'food3';
food3.type = 'text';
food3.maxLength = '20'
food3.name = 'food3';
//food3.required = 'required';
form.appendChild(food3);

form.appendChild(document.createElement('br'))
var food4 = document.createElement('input');
food4.placeholder='Enter Food 4 Here'
food4.autocomplete = 'off';
food4.setAttribute('style','margin-left: 48% !important;')
food4.id = 'food4';
food4.type = 'text';
food4.maxLength = '20'
food4.name = 'food2';
//food4.required = 'required';
form.appendChild(food4);

form.appendChild(document.createElement('br'))
var food5 = document.createElement('input');
food5.placeholder='Enter Food 5 Here'
food5.autocomplete = 'off';
food5.setAttribute('style','margin-left: 48% !important;')
food5.id = 'food5';
food5.type = 'text';
food5.maxLength = '20'
food5.name = 'food5';
//food5.required = 'required';
form.appendChild(food5);
//-------------------------------------------------------Favorite Food Created---------------------------------------------------------------------
form.appendChild(document.createElement('br'))
var stateLabel = document.createElement('label');
stateLabel.setAttribute('for','state');
stateLabel.innerText = 'State'
form.appendChild(stateLabel);

var state = document.createElement('input');
state.placeholder='Enter State'
state.autocomplete = 'off';
state.id = 'state';
state.type = 'text';
state.maxLength = '20'
state.name = 'state';
state.required = 'required';
form.appendChild(state);

//---------------------------------------------------------State is Done--------------------------------------------------------------------------
form.appendChild(document.createElement('br'))
var countryLabel = document.createElement('label');
countryLabel.setAttribute('for','Country');
countryLabel.innerText = 'Country'
form.appendChild(countryLabel);

var country = document.createElement('input');
country.placeholder='Enter Country'
country.autocomplete = 'off';
country.id = 'country';
country.type = 'text';
country.maxLength = '20'
country.name = 'country';
country.required = 'required';
form.appendChild(country);


//---------------------------------------------------------Country Done--------------------------------------------------------------------------
var tableDiv = document.createElement('div');
tableDiv.setAttribute('id','displayDetails');
tableDiv.setAttribute('class','displayArea')
document.body.appendChild(tableDiv);

var table = document.createElement('table');
    var trow1 = document.createElement('tr');
    var firstNameSec = document.createElement('th');
    firstNameSec.innerText = "First Name";
    trow1.appendChild(firstNameSec);
    table.appendChild(trow1);

    var trow2 = document.createElement('tr');
    var lastNameSec = document.createElement('th');
    lastNameSec.innerText = "Last Name";
    trow2.appendChild(lastNameSec);
    table.appendChild(trow2);

    var trow3 = document.createElement('tr');
    var addresslineSec = document.createElement('th');
    addresslineSec.innerText = "Address";
    trow3.appendChild(addresslineSec);
    table.appendChild(trow3);

    var trow4 = document.createElement('tr');
    var pincodeSec = document.createElement('th');
    pincodeSec.innerText = "PIN Code";
    trow4.appendChild(pincodeSec);
    table.appendChild(trow4);

    var trow5 = document.createElement('tr');
    var genderSec = document.createElement('th');
    genderSec.innerText = "Gender";
    trow5.appendChild(genderSec);
    table.appendChild(trow5);

    var trow6 = document.createElement('tr');
    var foodSec = document.createElement('th');
    foodSec.innerText = "Favourite Food";
    trow6.appendChild(foodSec);
    table.appendChild(trow6);

    var trow7 = document.createElement('tr');
    var stateSec = document.createElement('th');
    stateSec.innerText = "State";
    trow7.appendChild(stateSec);
    table.appendChild(trow7);
    
    var trow8 = document.createElement('tr');
    var countrySec = document.createElement('th');
    countrySec.innerText = "Country";
    trow8.appendChild(countrySec);
    table.appendChild(trow8);

    tableDiv.appendChild(table);

     var reload = document.createElement('a');
     reload.innerText = 'Reload'
     reload.setAttribute('href','index.html')
    
     
//---------------------------------------------------------------------Table Creation---------------------------------------------------------------------------
var submit = document.createElement('button');
submit.setAttribute('class','button button-yellow');
submit.innerText = 'Submit'
form.appendChild(submit);


function fn1(){
    var firstNamedata = document.createElement('td');
    var firstNameResponse =  document.getElementById('firstName').value;
    firstNamedata.innerText = firstNameResponse;
    trow1.appendChild(firstNamedata);

    var lastNamedata = document.createElement('td');
    var lastNameResponse =  document.getElementById('lastName').value;
    lastNamedata.innerText = lastNameResponse;
    trow2.appendChild(lastNamedata);

    var addressdata = document.createElement('td');
    var addressline1Response =  document.getElementById('addressline1').value;
    var addressline2Response = document.getElementById('addressline2').value
    addressdata.innerText = `${addressline1Response},
    ${addressline2Response}`;
    trow3.appendChild(addressdata);

    var pindata = document.createElement('td');
    var pinResponse =  document.getElementById('pincode').value;
    if(isNaN(pinResponse))
    {
        confirm(`PIN Code must be a 6 digit Number
        The Page Will be reloaded..!!`);
        return indexe.html.reload();
        
    }
    else{
        pindata.innerText = pinResponse;
        trow4.appendChild(pindata);
    }

    var genderdata = document.createElement('td');
    var gendermalechecked =  document.getElementById('male');
    if(gendermalechecked.checked === true)
    {
        genderdata.innerText = 'Male'
    }
    else{
        genderdata.innerText = 'Female'
    }
    trow5.appendChild(genderdata);

    var fooddata = document.createElement('td');
    var food1 = document.getElementById('food1').value;
    var food2 = document.getElementById('food2').value;
    var food3 = document.getElementById('food3').value;
    var food4 = document.getElementById('food4').value;
    var food5 = document.getElementById('food5').value;
    if(food1.length === 0|| food2.length === 0)
    {
        alert(`Please Enter at least 2 Favourite foods..
        If Entered.. Please enter them in the order of input fields.. (Don't Skip the boxes..)` )
        document.getElementById('myForm').clear();
    }
    else{
        fooddata.innerText = `${food1} 
        ${food2}
        ${food3} 
        ${food4} 
        ${food5}`;
        
    }
    trow6.appendChild(fooddata);

    var statedata = document.createElement('td');
    var stateResponse =  document.getElementById('state').value;
    statedata.innerText = stateResponse;
    trow7.appendChild(statedata);

    var countrydata = document.createElement('td');
    var countryResponse =  document.getElementById('country').value;
    countrydata.innerText = countryResponse;
    trow8.appendChild(countrydata);
    alert("Thnak you..!");
    document.getElementById('container').style.display = 'none';
    document.getElementById('displayDetails').style.display = 'flex';
    document.getElementById('myForm').reset();
    document.body.appendChild(reload);
    
}

 




/*
function fn1(){

var tableArea = document.getElementById('reveal');
var table = document.createElement('table')
var trow1 = document.createElement('tr');
var fnameSection = document.createElement('th');
fnameSection.innerText = "First Name";
trow1.appendChild(fnameSection);
table.appendChild(trow1);
tableArea.appendChild(table);
var fnameInputSec = document.createElement('td');
var fnameInputresp = document.getElementById('firstName').value;
fnameInputSec.innerText = fnameInputresp
trow1.appendChild(fnameInputSec);

}
*/

/*

function fn1(){
    var rd1 = document.getElementById('male');
    if(rd1.checked == true)
    {
        alert(rd1.value);
    }
    else{
        alert(document.getElementById('female').value);
    }
    alert(document.getElementById('firstName').value);
    var food = (document.getElementById('food3').value);
    if(food === undefined)
    {
        alert('Hey');
    }
}
*/

//------------------------------------------------------Button Created-----------------------------------------------------------------------------
//------------------------------------------------------Below code is append the elements to the respective parents---------------------------------

formDivision.appendChild(form);
container.appendChild(formDivision);
document.body.appendChild(container);