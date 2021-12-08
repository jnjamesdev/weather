import { apiKey, apiUrl, units } from '../env.js';

/*
  Call open weather map API on click of search button
*/
export async function getDataFromAPI(city) {
  let result = {};
  await fetch(apiUrl + 'q=' + city + '&appid=' + apiKey + '&units=' + units)
    .then((response) => {
      result = response.json();
    })
    .catch(function (error) {
      result = error.json();
    });

  return result
}

