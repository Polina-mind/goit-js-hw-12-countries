import './notification';
import { alert, error } from '@pnotify/core/dist/PNotify.js';
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
      const filteredCountry = countryData.filter(({ name }) =>
        name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      renderingResult(filteredCountry, searchQuery);
    })
    .catch(error => console.log(error));
}

function renderingResult(filteredCountry, searchQuery) {
  if (filteredCountry.length === 1) {
    refs.countryOption.innerHTML = finalTemplate(filteredCountry);
  } else if ((filteredCountry.length > 1) & (filteredCountry.length < 10)) {
    const similarCountry = filteredCountry.filter(
      ({ name }) => name.toLowerCase() === searchQuery.toLowerCase(),
    );

    refs.countryOption.innerHTML =
      similarCountry.length > 0
        ? finalTemplate(similarCountry)
        : template(filteredCountry);
  } else if (filteredCountry.length >= 10) {
    alert({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 3000,
    });

    refs.countryOption.innerHTML = '';

    // refs.countryOption.innerHTML =
    //   '<p class="helper">Too many matches found. Please enter a more specific query!</p>';
  } else {
    error({
      text: 'Incorrect input. Please try again!',
      type: 'error',
      delay: 3000,
    });

    refs.countryOption.innerHTML = '';

    // refs.countryOption.innerHTML =
    //   '<p class="helper">Incorrect input. Please try again!</p>';
  }
}

export default fetchCountries;
