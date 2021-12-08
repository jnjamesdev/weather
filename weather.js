
/*
  Handle response from weather API
*/
function handleApiResponse(apiData) {
  let HTML = '';
  const rainVol = getRainVol(apiData);

  debugger;
  HTML += '<li><strong>Current weather conditions:</strong> ' + apiData.weather[0].main + ', ' + apiData.weather[0].description;
  HTML += '<li><strong>The current temperature, in celsius:</strong> ' + apiData.main.temp;
  HTML += '<li><strong>"Feels like" temperature, in celsius:</strong> ' + apiData.main.feels_like;
  HTML += '<li><strong>"Humidity percentage:</strong> ' + apiData.main.humidity;
  HTML += '<li><strong>Minimum temperature, in celsius:</strong> ' + apiData.main.temp_min;
  HTML += '<li><strong>Maximum temperature, in celsius.:</strong> ' + apiData.main.temp_max;
  HTML += '<li><strong>Wind speed, in miles per hour:</strong> ' + calcMilesPHFromMeteresPerSecond(apiData.wind.speed);
  HTML += '<li><strong>Rain volume for the last hour, in millimeters:</strong> ' + rainVol;

  document.getElementById('resultsList').innerHTML = HTML;
  document.getElementById('errors').innerText = '';

}

/*
  Get rain volume in mm, or return no data if null
*/
function getRainVol(apiData) {
  if (apiData.rain) {
    return apiData.rain['1h'];
  }
  return "No Data";
}


/*
  Convert Meteres Per Second to Miles Per Hour
*/
function calcMilesPHFromMeteresPerSecond(windSpeedInMeteresPerSec) {
  return (windSpeedInMeteresPerSec * 2.23694).toFixed(2);
}

/*
  Handle errors
*/
function handleError(error) {
  document.getElementById('resultsList').innerText = 'Error';
  document.getElementById('errors').innerText = error.message;
}

