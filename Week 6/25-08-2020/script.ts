class Availability {
    available;
    constructor() {
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
}

class Inquiry {
    name;
    telephone;
    adoptStatus;
    category;
    details;
    constructor() {
        this.details = [];
    }
    request(obj) {
        this.details.push(obj);
    }
}

let inquiries = new Inquiry()
let availableList = new Availability();
var objCopy;
var submitted = () => {
    event.preventDefault();
    document.getElementById('details').style.visibility = 'hidden';
    let object = new Object()
    object['name'] = `${(document.getElementById('fullname') as HTMLInputElement).value}`
    object['telephone'] = `${(document.getElementById('cell') as HTMLInputElement).value}`

    if ((document.getElementById('yes') as HTMLInputElement).checked === true) {
        object['adoptStatus'] = `${(document.getElementById('yes') as HTMLInputElement).value}`
    }
    else {
        object['adoptStatus'] = `${(document.getElementById('No') as HTMLInputElement).value}`
    }

    object['category'] = `${(document.getElementById('category') as HTMLInputElement).value}`

    inquiries.details.push(object);
    console.log(object);

    if (object['category'] === 'dogs') {
        let status = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = ``;

        status.innerHTML = `Your Query has "${availableList.available[0].length}" Matches`;
        document.getElementById('availability').appendChild(status);
    }
    else if(object['category'] === 'cats'){
        let status = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = ``;
        status.innerHTML = `Your Query has "${availableList.available[1].length}" Matches`;
        document.getElementById('availability').appendChild(status);
    }
    else if(object['category'] === 'birds'){
        let status = document.getElementById('status');
        document.getElementById('availability').style.visibility = 'visible';
        (document.getElementById('status')).innerHTML = ``;
        status.innerHTML = `Your Query has "${availableList.available[2].length}" Matches`;
        document.getElementById('availability').appendChild(status);
    }
    else if(object['category'] === 'rabbits'){
        let status = document.getElementById('status');
        (document.getElementById('status')).innerHTML = ``;
        document.getElementById('availability').style.visibility = 'visible';
        status.innerHTML = `Your Query has "${availableList.available[3].length}" Matches`;
        document.getElementById('availability').appendChild(status);
    }

    objCopy = new Object(object);
    console.log(availableList.available[0].length, object['category']);
    var resetForm = <HTMLFormElement>document.getElementById('form');
    resetForm.reset();

}

var showDetails = () =>{
    let arrInd;
    document.getElementById('availability').style.visibility = 'hidden';
    
    if(objCopy['category'] === 'dogs'){
        arrInd = 0;
    }
    else if(objCopy['category'] === 'cats'){
        arrInd = 1;
    }
    if(objCopy['category'] === 'birds'){
        arrInd = 2;
    }
    else if(objCopy['category'] === 'rabbits'){
        arrInd = 3;
    }
    console.log(arrInd)

    availableList.available[arrInd].forEach(element => {
        var Div = document.createElement('p');
        Div.setAttribute('style','width: fit-content; height: fit-content; border: 1px solid white; color:white; font-size: 20px');
        Div.innerHTML = `<br> <b> Category of Pet </b> : ${element['category']} <br>
        <b> Pet\'s Name </b> : ${element['name']} <br> <b> Pet\'s Age </b> : ${element['age']} 
        <br> <b> Pet\'s Gender </b> : ${element['gender']} <br> <b> Pet\'s Vaccination Status </b> : ${element['vaccinationStatus']}
        <br> <b> Pet\'s Health Status </b> : ${element['healthStatus']} `;
        document.getElementById('details').appendChild(Div);
    });
    document.getElementById('details').style.visibility = 'visible';

}


