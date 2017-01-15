// using ipinfo.io and openweathermap.org

$(function(){
  const apiKey = '05b3f0b8b5522d763c58832b3f512a32';
  let loc, lat, lon;

  function kToF(temp) {
    return (temp * 1.8 - 459.67);
  }

  function kToC(temp) {
    return (temp - 273.15);
  }

  $.getJSON('http://ipinfo.io', function(data){
  loc = data.loc.split(",");
  lat = loc[0];
  lon = loc[1];

  $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}`, function(weatherData){
    
    let location = weatherData.name;
    let weatherDescription = weatherData.weather[0].description;
    let kTemp = weatherData.main.temp;
    let fTemp = Math.round(kToF(kTemp));
    let cTemp = kToC(kTemp);
    let kLowTemp = weatherData.main.temp_min;
    let fLowTemp = kToF(kLowTemp);
    let cLowTemp = kToC(kLowTemp);
    let kHighTemp = weatherData.main.temp_max;
    let fHighTemp = kToF(kHighTemp);
    let cHighTemp = kToC(kHighTemp);

    $('#location').html(location);
    $('#temperature').html(`${fTemp}&#176`);
    $('#weather-description').html(weatherDescription);
  })
})
})