// Header Info
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

// Enter the Longtitude and Latitude of the location you want, default is Oslo, Norway
var lon = "10.7522"
var lat = "59.9139"

// GET request and parse of data from Yr.no API.
const symbolRequest = () => {
    fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat="+lat+"&lon="+lon, requestOptions)
    .then(response => response.json())
    .then(data => {
        var symbol = data['properties']['timeseries'][0]['data']["next_1_hours"]["summary"]["symbol_code"];
        document.getElementById("weather_symbol").attributes.src.value = "resources/" + symbol + ".png";
    })
}

symbolRequest()