

const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=e681baa04b7db3d01b4b4bb6cfe8420a&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });





/*    
{
    "id": 5861897,
    "name": "Fairbanks",
    "state": "AK",
    "country": "US",
    "coord": {
        "lon": -147.716385,
        "lat": 64.837784
    }
{
    "id": 5586437,
    "name": "Boise",
    "state": "ID",
    "country": "US",
    "coord": {
        "lon": -116.203453,
        "lat": 43.613499
    }*/