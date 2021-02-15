var debounce = require('lodash.debounce');
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import renderingResult from './js/renderingResult';
import './styles.css';

refs.nameInput.addEventListener(
  'input',
  debounce(event => {
    const inputString = event.target.value;

    if (inputString.length > 0) {
      fetchCountries(inputString).then(renderingResult);
    } else {
      refs.countryOption.innerHTML = '';
    }
  }, 500),
);
