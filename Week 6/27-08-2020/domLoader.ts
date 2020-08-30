import { resolve } from "url";
import { rejects } from "assert";

const resultLinks:any = [];
const resultAvatars:any = [];
let counter:number;
//---------------------------------------------------------------Body Container Main---------------------------------------
var container = document.createElement('div');
container.classList.add('row', 'container-fluid', 'gradient', 'scrollable');
//container.style.height = '522px'
container.style.overflow = 'scroll';
document.body.appendChild(container);
//---------------------------------------------------------------Body Container Main Done---------------------------------------


//-----------------------------------------------------------------Adding side bar column--------------------------------------------
var sideBar = document.createElement('div');
sideBar.classList.add('col-12', 'col-sm-12', 'col-md-4', 'col-lg-3', 'sideBar');
container.appendChild(sideBar);
//-----------------------------------------------------------------Adding side bar column--------------------------------------------


//-----------------------------------------------------------------Adding search bar and User container column--------------------------------------------
var searchBarDiv = document.createElement('div');
searchBarDiv.classList.add('col-lg-9', 'container');
container.appendChild(searchBarDiv);

let Div = document.createElement('div');
searchBarDiv.appendChild(Div);

var form = document.createElement('form');
Div.appendChild(form);

var searchBar = document.createElement('input');
searchBar.type = 'text';
searchBar.id = 'searchBar';
searchBar.classList.add('searchBar');
form.appendChild(searchBar);

Div.appendChild(form);  //***************** */


let printDiv = document.createElement('div');
printDiv.classList.add('mt-5','ml-5');
searchBarDiv.appendChild(printDiv);


var searchedSong: string;

var searchIcon = document.createElement('i');
searchIcon.id = 'searchHere';
searchIcon.style.cursor = 'pointer';
searchIcon.onclick = () => {
    counter = 0;
    searchedSong = (<HTMLInputElement>document.getElementById('searchBar')).value;
    let term = searchedSong.split(" ").join("%20");
    play.getSuggestions(term);
}

searchIcon.classList.add('fa', 'fa-search');
searchIcon.onmouseover = () => {
    (<HTMLInputElement>document.getElementById('searchBar')).style.visibility = 'visible';
    (<HTMLInputElement>document.getElementById('searchBar')).style.border = '1px solid white';
    (<HTMLInputElement>document.getElementById('searchBar')).style.width = '60%';
}

searchBar.onmouseleave = () => {
    (<HTMLInputElement>document.getElementById('searchBar')).style.visibility = 'hidden';
    (<HTMLInputElement>document.getElementById('searchBar')).style.width = '0';
}
form.appendChild(searchIcon);

//-----------------------------------------------------------------Adding search bar and User container column Done--------------------------------------------


//-------------------------------------------------------------------logo within SideBar -------------------------------------------
var logoColumn = document.createElement('div');
logoColumn.classList.add('col', 'logo');
logoColumn.innerHTML = '<i class="fas fa-compact-disc"> <p class= "appName"> Rhythms <i class="support">Powered By Shazam API</i></p>';
sideBar.appendChild(logoColumn);
//-------------------------------------------------------------------logo within SideBarDone -------------------------------------------


//-------------------------------------------------------------------adding Options Row within SideBar ----------------------------------
var options = document.createElement('div');
options.classList.add('row', 'container-fluid', 'options');
sideBar.appendChild(options);
//-------------------------------------------------------------------adding Options Row within SideBar Done------------------------------


//-------------------------------------------------------------------adding Options inside Options Row------------------------------------
var home = document.createElement('a');
home.id = 'option-home';
home.href = 'index.html'
home.classList.add('col-12', 'text-center');
home.innerHTML = `<i class="fas fa-home"> Home</i>`;
options.appendChild(home);

var search = document.createElement('a');
search.id = 'option-search';
search.addEventListener('click', () => {
    (<HTMLInputElement>document.getElementById('searchHere')).style.visibility = 'visible';
    (<HTMLInputElement>document.getElementById('searchBar')).style.visibility = 'visible';
    (<HTMLInputElement>document.getElementById('searchBar')).style.border = '1px solid white';
    (<HTMLInputElement>document.getElementById('searchBar')).style.width = '60%';
})
search.classList.add('col-12', 'text-center');
search.innerHTML = `<i class="fas fa-search"> Seach</i>`;
options.appendChild(search);


//-------------------------------------------------------------------adding Options inside Options Row Done------------------------------




//--------------------------------------------------------------------adding Player Controls at the bottom--------------------------------
var playerDiv = document.createElement('div');
playerDiv.classList.add('row', 'container-fluid', 'fixed-bottom', 'playerControlDiv');
document.body.appendChild(playerDiv);

var left = document.createElement('div');
left.classList.add('col-3', 'col-sm-3', 'col-md-3', 'col-lg-3');
playerDiv.appendChild(left);

var playerThumbnail = document.createElement('img');
playerThumbnail.classList.add('img-thumbnail');
playerThumbnail.id = 'playerThumbnail';
left.appendChild(playerThumbnail);

var midddle = document.createElement('div');
midddle.classList.add('col-9', 'col-sm-9', 'col-md-9', 'col-lg-9');
playerDiv.appendChild(midddle);

var player = document.createElement('audio');
player.classList.add('player');
player.setAttribute('controls', 'true');

player.id = 'currentSong';
player.src = ``;

midddle.appendChild(player);
//--------------------------------------------------------------------adding Player Controls at the bottom Done----------------------------

class MusicPlayer {

    constructor() {

    }

    async getSuggestions(search: string) {

        try {
            let response = await fetch(`https://shazam.p.rapidapi.com/auto-complete?locale=en-US&term=${search}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "shazam.p.rapidapi.com",
                    "x-rapidapi-key": "a020e34646msh96884fedb5984f9p133e23jsnc8431ca634ff"
                }
            })

            let data = await response.json();

            if(data.hints.length !== 0)
            {
                (data.hints).forEach((element: any) => {
                    this.search(element.term)
                });

            }
            else{
                alert('Oops.. ! No Data Found..')
            }
        } catch (err) {
            alert(`https://shazam.p.rapidapi.com/auto-complete?locale=en-US&term=${search} responded with a status of 429 (Too Many Requests), ${err}`);
        }
    }

    async search(word: string) {
        try {
            let response = await fetch(`https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=${word}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "shazam.p.rapidapi.com",
                    "x-rapidapi-key": "a020e34646msh96884fedb5984f9p133e23jsnc8431ca634ff" 
                }
            })
            let data = await response.json();

            printDiv.innerHTML = ``;

            ((data.tracks).hits).forEach((element:any) => {
                resultLinks.push(element.track.hub.actions[1].uri);
                addCards();
            });


        } catch (err) {
            alert(`https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=${word} responded with a status of 429 (Too Many Requests), ${err}`);
        }
    }


}


let addCards = () => {
    counter++;
    searchBarDiv.appendChild(document.createElement('br'));
     
        let image = document.createElement('img');
        image.id = `${counter}`
        image.classList.add('card-img','p-4')
        image.alt = `Artist Image Not (Available Currently)`
        image.src = `https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2018/08/The-20-Best-Royalty-Free-Music-Sites-in-2018.png`;
        image.style.cursor = 'pointer';
        image.style.width = '200px';
        image.style.height = '200px';
        image.onclick = ()=>{
            player.src = `${resultLinks[image.id]}`;
            player.play();
        }
        printDiv.appendChild(image);
    }

var play = new MusicPlayer();
