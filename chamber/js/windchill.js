/* This code will grab input from the user for the current temperature and the wind speed. It will then calculate the wind chill.*/

/* Use this code for input in the future. Might need testing first.*/
/*
    let temp = document.getElementById('tempinput').value;
    let wspeed = document.getElementById('windinput').value;

function tempinput(){
    wchill = windchill(temp,wspeed);
    document.getElementById('finaltemp').innerHTML = wchill;
}

function windchill(temp, wspeed){
    windchill = (35.74 + 0.6215 * temp - 35.75 * Math.pow(wspeed, 0.16) + 0.4275 * temp * Math.pow(wspeed, 0.16));
    return windchill.toFixed(2);
}*/

var temp = 57;
var wspeed = 15;
var windchill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wspeed, 0.16)) + (0.4275 * temp * Math.pow(wspeed, 0.16));

var windchill = Math.round(windchill);
document.getElementById("windchill").innerHTML = windchill;