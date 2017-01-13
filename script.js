// using ipinfo.io and openweathermap.org

$(function(){
  const apiKey = '05b3f0b8b5522d763c58832b3f512a32';
  let loc, lat, lon;

  $.getJSON('http://ipinfo.io', function(data){
  loc = data.loc.split(",");
  lat = loc[0];
  lon = loc[1];

  $.getJSON(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}`, function(weatherData){
    console.log(weatherData)
  })
})
})