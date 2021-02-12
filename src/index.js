var debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries';
import './styles.css';

const refs = {
  nameInput: document.querySelector('#country-input'),
  countryOption: document.querySelector('.country-option'),
};

refs.nameInput.addEventListener(
  'input',
  debounce(event => {
    const inputString = event.target.value;
    if (inputString.length > 0) {
      fetchCountries(inputString);
    } else {
      refs.countryOption.innerHTML = '';
    }
  }, 500),
);
