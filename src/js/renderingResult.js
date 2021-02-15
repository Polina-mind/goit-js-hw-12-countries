import './notification';
import { alert, error } from '@pnotify/core/dist/PNotify.js';
import refs from './refs';
import finalTemplate from '../templates/final-template.hbs';
import template from '../templates/template.hbs';

function renderingResult(filteredCountry) {
  if (filteredCountry.length === 1) {
    refs.countryOption.innerHTML = finalTemplate(filteredCountry);
  } else if ((filteredCountry.length > 1) & (filteredCountry.length < 10)) {
    refs.countryOption.innerHTML = template(filteredCountry);
  } else if (filteredCountry.length >= 10) {
    alert({
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 3000,
    });

    refs.countryOption.innerHTML = '';
  } else {
    error({
      text: 'Incorrect input. Please try again!',
      type: 'error',
      delay: 3000,
    });

    refs.countryOption.innerHTML = '';
  }
}

export default renderingResult;
