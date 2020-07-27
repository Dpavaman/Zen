var request = new XMLHttpRequest();
request.open('GET', "https://api.openweathermap.org/data/2.5/weather?lat=12.9716&lon=77.5946&appid=f66e464f223acdf197a09268ca0ec92b", true);   // Lattitude and Longitude of Bangalore.
request.onload = function() {
  var data = JSON.parse(this.response)
  console.log(data)
  }
  request.send()