var request = new XMLHttpRequest();
request.open('GET', "https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com", true);  //used an API "https://cors-anywhere.herokuapp.com/" "
request.onload = function() {
  var data = JSON.parse(this.response)
  console.log(data)
  }
request.send()

/*
But "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com" does not have a Access-Control-Allow-Origin value in place that permits the web application domain to access it. So instead, send your GET request to:
"https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"
The proxy server receives the "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com" from the url above. 
Then it makes the request to get that server’s response. And finally, the proxy applies the Access-Control-Allow-Origin: * to that original response.
*/