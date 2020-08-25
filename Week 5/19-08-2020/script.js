var url = 'https://restcountries.eu/rest/v2/all'
async function fetchData(url) {
    try {
        var data = await fetch(url);
        var realData = data.json();
        return realData;
    } catch (err) {
        return err;
    }
}
async function getWeatherData(lat,long) {
    try {
        let url = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&exclude=hourly,daily&appid=e607e39f75c1c7526deb060ba1d50024";
        var data = await fetchData(url);
        var realWeatherData = data;
        return realWeatherData;
    }
    catch (err) {
        return err;
    }
}

//-----------------------------------------------------------------------------------------------------------------------------Fetching of weather data and rest countries data done.---------------------------------------------------------------------------------------------------------

fetchData(url).then(function (countriesData) {

    var containerDiv = document.createElement('div');
    containerDiv.setAttribute('class', 'container text-center');

    var rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row');

    var h1 = document.createElement('h1');
    h1.setAttribute('style','color:#18dcff; margin-left:1rem');
    h1.classList.add('display-3');
    h1.innerHTML = '<b>Know Current Weather of Rest Countries</b>';

    var p = document.createElement('p');
    p.innerHTML = `<u>(With Integration of REST Countries API   and   Weather API)</u>`;
    p.setAttribute('style','font-family:cursive; font-size:18px;color:black; margin-left:30%;')
    h1.appendChild(p);
    document.body.appendChild(h1);

    for (let ind = 0; ind < countriesData.length; ind++) {
        var colDiv = document.createElement('div');
        colDiv.setAttribute('class', 'col-sm-4');

        var cardDiv = document.createElement('div');
        cardDiv.setAttribute('class', 'card text-center');

        var countryImg = document.createElement('img');
        countryImg.setAttribute('class', 'card-img-top');
        countryImg.src = countriesData[ind]['flag'];

        var divBody = document.createElement('div');
        divBody.setAttribute('class', 'card-body');

        var cardTitle = document.createElement("h4");
        cardTitle.setAttribute('class', 'card-title');
        cardTitle.innerHTML = `<u><i>${countriesData[ind].name}</i></u>` ;

        let latitude = countriesData[ind]['latlng'][0];
        let longitude = countriesData[ind]['latlng'][1];

        var detailsCountry = document.createElement('p');
        detailsCountry.setAttribute('class', 'card-text');
        detailsCountry.innerHTML = "<b><i>Region</i></b> : " + countriesData[ind]['region'] + "<br>" + detailsCountry.innerText + "<br> <b>Capital</b> : " + countriesData[ind]['capital'];
        
        var lat = document.createElement('p');
        lat.setAttribute('class', 'card-text');
        lat.id = latitude;
        lat.innerHTML = "<b>Latitude</b> : " + latitude;

        var long = document.createElement('p');
        long.setAttribute('class', 'card-text');
        long.id = longitude;
        long.innerHTML = "<b>Longitude</b> :" + longitude;

        let btnCheckWeather = document.createElement('button');
        btnCheckWeather.setAttribute('class', 'btn btn-primary');
        btnCheckWeather.value = countriesData[ind]['alpha3Code'];
        btnCheckWeather.innerText = "Check Weather";

        divBody.appendChild(countryImg);
        divBody.appendChild(cardTitle);
        cardDiv.appendChild(divBody);


        divBody.appendChild(detailsCountry);
        divBody.appendChild(lat);
        divBody.appendChild(long);
        divBody.appendChild(btnCheckWeather);

        btnCheckWeather.addEventListener('click', function () {
            getWeatherData(latitude,longitude).then(function (weatherData) {
                alert(countriesData[ind]["name"] +"\'s Current whether Conditions is "+ weatherData['current']['weather'][0]['description']);
            }).catch(function (err) {
                alert(err);
            })
        });
        colDiv.appendChild(cardDiv);
        rowDiv.appendChild(colDiv);
    }

    containerDiv.appendChild(rowDiv);
    document.body.appendChild(containerDiv);

}).catch(function (err) {
    console.log(err);
})