var Availability = /** @class */ (function () {
    function Availability() {
        this.available = [
            [
                {
                    category: 'Dog',
                    name: 'Charlie',
                    age: '2',
                    gender: 'Male',
                    vaccinationStatus: ' All Vacciinations Done.',
                    healthStatus: 'Best'
                },
                {
                    category: 'Dog',
                    name: 'Ruby',
                    age: '1',
                    gender: 'Male',
                    vaccinationStatus: 'All Vacciinations Done.',
                    healthStatus: 'Better'
                },
                {
                    category: 'Dog',
                    name: 'Diesel',
                    age: '3',
                    gender: 'Female',
                    vaccinationStatus: 'All Vacciinations Done.',
                    healthStatus: 'Better'
                },
                {
                    category: 'Dog',
                    name: 'Cooper',
                    age: '0.5',
                    gender: 'Female',
                    vaccinationStatus: 'Vacciinations Not Done.',
                    healthStatus: 'Best'
                },
                {
                    category: 'Dog',
                    name: 'Bruce',
                    age: '6',
                    gender: 'Male',
                    vaccinationStatus: 'Vacciinations Partially Done.',
                    healthStatus: 'Good'
                }
            ],
            [
                {
                    category: 'Cat',
                    name: 'Kitty',
                    age: '3',
                    gender: 'Female',
                    vaccinationStatus: 'All Vaccination Done',
                    healthStatus: 'Best'
                },
                {
                    category: 'Cat',
                    name: 'Zoe',
                    age: '2',
                    gender: 'Female',
                    vaccinationStatus: 'All Vaccination Done',
                    healthStatus: 'Good'
                },
                {
                    category: 'Cat',
                    name: 'Lucy',
                    age: '1',
                    gender: 'Male',
                    vaccinationStatus: 'All Vaccination Not Done',
                    healthStatus: 'Better'
                },
                {
                    category: 'Cat',
                    name: 'Bella',
                    age: '4',
                    gender: 'Female',
                    vaccinationStatus: 'Vaccination Partially Done',
                    healthStatus: 'Good'
                }
            ],
            [
                {
                    category: 'Parrot',
                    name: 'Angel',
                    age: '6',
                    gender: 'Male',
                    vaccinationStatus: 'Vaccination Done',
                    healthStatus: 'Good'
                },
                {
                    category: 'Parrot',
                    name: 'Kiwi',
                    age: '3',
                    gender: 'Female',
                    vaccinationStatus: 'Vaccination Done',
                    healthStatus: 'Better'
                },
                {
                    category: 'Parrot',
                    name: 'CO-CO',
                    age: '1',
                    gender: 'Male',
                    vaccinationStatus: 'Vaccination Not Done',
                    healthStatus: 'Best'
                },
                {
                    category: 'Parrot',
                    name: 'Harley',
                    age: '4',
                    gender: 'Female',
                    vaccinationStatus: 'Vaccination Done',
                    healthStatus: 'Good'
                }
            ],
            [
                {
                    category: 'Rabbit',
                    name: 'Oreo',
                    age: '0.2',
                    gender: 'Female',
                    vaccinationStatus: 'Vaccination Done',
                    healthStatus: 'Better'
                },
                {
                    category: 'Rabbit',
                    name: 'Bunny',
                    age: '0.5',
                    gender: 'Male',
                    vaccinationStatus: 'Vaccination Done',
                    healthStatus: 'Best'
                },
                {
                    category: 'Parrot',
                    name: 'Daisy',
                    age: '0.8',
                    gender: 'Female',
                    vaccinationStatus: 'Vaccination Not Done',
                    healthStatus: 'Good'
                },
                {
                    category: 'Parrot',
                    name: 'Cinnamon',
                    age: '1.2',
                    gender: 'Female',
                    vaccinationStatus: 'Vaccination Done',
                    healthStatus: 'Better'
                }
            ]
        ];
    }
    return Availability;
}());
var Inquiry = /** @class */ (function () {
    function Inquiry() {
        this.details = [];
    }
    Inquiry.prototype.request = function (obj) {
        this.details.push(obj);
    };
    return Inquiry;
}());
var inquiries = new Inquiry();
var availableList = new Availability();
var objCopy;
var submitted = function () {
    event.preventDefault();
    document.getElementById('details').style.visibility = 'hidden';
    var object = new Object();
    object['name'] = "" + document.getElementById('fullname').value;
    object['telephone'] = "" + document.getElementById('cell').value;
    if (document.getElementById('yes').checked === true) {
        object['adoptStatus'] = "" + document.getElementById('yes').value;
    }
    else {
        object['adoptStatus'] = "" + document.getElementById('No').value;
    }
    object['category'] = "" + document.getElementById('category').value;
    inquiries.details.push(object);
    console.log(object);
    if (object['category'] === 'dogs') {
        var status_1 = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = "";
        status_1.innerHTML = "Your Query has \"" + availableList.available[0].length + "\" Matches";
        document.getElementById('availability').appendChild(status_1);
    }
    else if (object['category'] === 'cats') {
        var status_2 = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = "";
        status_2.innerHTML = "Your Query has \"" + availableList.available[1].length + "\" Matches";
        document.getElementById('availability').appendChild(status_2);
    }
    else if (object['category'] === 'birds') {
        var status_3 = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = "";
        status_3.innerHTML = "Your Query has \"" + availableList.available[2].length + "\" Matches";
        document.getElementById('availability').appendChild(status_3);
    }
    else if (object['category'] === 'rabbits') {
        var status_4 = document.getElementById('status');
        (document.getElementById('status')).innerHTML = "";
        document.getElementById('availability').style.visibility = 'visible';
        status_4.innerHTML = "Your Query has \"" + availableList.available[3].length + "\" Matches";
        document.getElementById('availability').appendChild(status_4);
    }
    objCopy = new Object(object);
    console.log(availableList.available[0].length, object['category']);
    var resetForm = document.getElementById('form');
    resetForm.reset();
};
var showDetails = function () {
    var arrInd;
    document.getElementById('availability').style.visibility = 'hidden';
    if (objCopy['category'] === 'dogs') {
        arrInd = 0;
    }
    else if (objCopy['category'] === 'cats') {
        arrInd = 1;
    }
    if (objCopy['category'] === 'birds') {
        arrInd = 2;
    }
    else if (objCopy['category'] === 'rabbits') {
        arrInd = 3;
    }
    console.log(arrInd);
    availableList.available[arrInd].forEach(function (element) {
        var Div = document.createElement('p');
        Div.setAttribute('style', 'width: fit-content; height: fit-content; border: 1px solid white; color:white; font-size: 20px');
        Div.innerHTML = "<br> <b> Category of Pet </b> : " + element['category'] + " <br>\n        <b> Pet's Name </b> : " + element['name'] + " <br> <b> Pet's Age </b> : " + element['age'] + " \n        <br> <b> Pet's Gender </b> : " + element['gender'] + " <br> <b> Pet's Vaccination Status </b> : " + element['vaccinationStatus'] + "\n        <br> <b> Pet's Health Status </b> : " + element['healthStatus'] + " ";
        document.getElementById('details').appendChild(Div);
    });
    document.getElementById('details').style.visibility = 'visible';
};
