var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.onload = function() {
    if(request.readyState === 4)
    {
        if(request.status === 200)
        {
            console.log(request.responseText)
        }
        else{
            console.log("Error", request.statusText)
        }
    }
  var data = JSON.parse(this.response)
  console.log(data)
  }
  request.send()
  