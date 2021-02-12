import './notification';
import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import finalTemplate from '../templates/final-template.hbs';
import template from '../templates/template.hbs';

const refs = {
  nameInput: document.querySelector('#country-input'),
  countryOption: document.querySelector('.country-option'),
};

const url =
  'https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag';

// Automatically set the type.
// const myNotice = notice({
//   text: 'Too many matches found. Please enter a more specific query!',
// });
// const incorrectNotice = notice({
//   text: 'Incorrect input. Please try again!',
// });

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
        alert({
          text: 'Too many matches found. Please enter a more specific query!',
          delay: 1000,
        });
        // matchAlert;
        refs.countryOption.innerHTML =
          '<p class="helper">Too many matches found. Please enter a more specific query!</p>';
      } else {
        error({
          text: 'Incorrect input. Please try again!',
          type: 'error',
          delay: 1000,
        });
        // incorrectError;
        refs.countryOption.innerHTML =
          '<p class="helper">Incorrect input. Please try again!</p>';
      }
    })
    .catch(error => console.log(error));
}

export default fetchCountries;
