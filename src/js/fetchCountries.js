import finalTemplate from '../templates/final-template.hbs';
import template from '../templates/template.hbs';

const refs = {
  nameInput: document.querySelector('#country-input'),
  countryOption: document.querySelector('.country-option'),
};

const url =
  'https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag';

function fetchCountries(searchQuery) {
  fetch(url)
    .then(response => response.json())
    .then(countryData => {
      // console.log(countryData);
      const filteredCountry = countryData.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      //   console.log(filteredCountry);
      if (filteredCountry.length === 1) {
        const markup = finalTemplate(filteredCountry);
        refs.countryOption.innerHTML = markup;
      } else if ((filteredCountry.length > 1) & (filteredCountry.length < 10)) {
        const markup = template(filteredCountry);
        refs.countryOption.innerHTML = markup;
      } else if (filteredCountry.length >= 10) {
        refs.countryOption.innerHTML =
          '<p class="helper">Введите более конкретное название</p>';
      } else {
        refs.countryOption.innerHTML =
          '<p class="helper">Введение некорректного поискового запроса</p>';
      }
    })
    .catch(error => console.log(error));
}

export default fetchCountries;
