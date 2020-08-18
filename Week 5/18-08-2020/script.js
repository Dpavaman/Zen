var division = document.createElement('div');
division.setAttribute('id','area');
division.setAttribute('class','container-fluid');
document.body.appendChild(division);

function getCountries(obj){
    var promise = new Promise(function(resolve,reject){
        let request = new XMLHttpRequest();
        request.open('GET',obj.url);
        if(obj.headers){
            Object.keys(obj.headers).forEach(function(key){
                request.setRequestHeader(key,obj.headers[key]);
            });
        }
        request.onload = function(){
            if(request.status >= 200 && request.status < 300)
            {
                resolve(request.response);
            }
            else{
                reject(request.statusText);
            }
        };
        request.onerror = function(){
            reject(request.statusText);
        }
        request.send(obj.body);
    })
    return promise;
}

getCountries({url: 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json'}).then(function(data){
    var countries = JSON.parse(data);
    countries.forEach(function(country){
        var card = document.createElement('div');
        card.setAttribute('class','card');
        var row = document.createElement('div');
        row.setAttribute('class','row');
        var col1 = document.createElement('div');
        col1.setAttribute('class','col-md-2');
        var col2 = document.createElement('div');
        col2.setAttribute('class','col-md-10');

        row.appendChild(col1);
        row.appendChild(col2);
        card.appendChild(row);
        document.getElementById('area').appendChild(card);

        col1.innerHTML = `<hr><br> <img class = 'border-15' src = ${country.flag} style = 'width: 200px; height: 150px'> `;
        col2.innerHTML = `<hr><br> Country Name:  <b>${country.name}</b> <br> Region of the Country: <b>${country.capital}</b> <br> Region of the Country: <b>${country.region}</b> <br> Currency Code: <b>${country.currencies[0].code}</b> <br> Currency Name: <b>${country.currencies[0].name}</b> 
                          <br> Currency Symbol: <b>${country.currencies[0].symbol}</b><br>
                          Lattitude: <b>${country.latlng[0]},</b>    &nbsp;    Longitude: <b>${country.latlng[1]}</b><br><hr><br>`;
    })
}).catch(function(error){
    document.getElementById('area').innerHTML = error;
})