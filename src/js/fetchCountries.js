import renderingResult from './renderingResult';

const url =
  'https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag';

function fetchCountries(searchQuery) {
  fetch(url)
    .then(response => response.json())
    .then(countryData => {
      const filteredCountry = countryData.filter(({ name }) =>
        name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      renderingResult(filteredCountry, searchQuery);
    })
    .catch(error => console.log(error));
}

export default fetchCountries;
