import './notification';
import { alert, error } from '@pnotify/core/dist/PNotify.js';
import finalTemplate from '../templates/final-template.hbs';
import template from '../templates/template.hbs';

const refs = {
  countryOption: document.querySelector('.country-option'),
};

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

export default renderingResult;
