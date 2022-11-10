import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const cardCountry = document.querySelector('.country-info');
const listCountry = document.querySelector('.country-list');

inputRef.addEventListener('input', debounce(writeCountry, DEBOUNCE_DELAY));

function writeCountry(ev) {
  const searchInput = ev.target.value.trim();
  fetchCountries(searchInput)
    .then(markupCountry)
    .catch(error => console.log(error));
}

//===================== MARKUP ==================================
// add markup of coutry
function markupCountry(country) {
  return cardCountry.insertAdjacentHTML(
    'beforeend',
    country
      .map(({ name, flags, capital, population, languages }) => {
        return `<h2 class="country">Country: ${name.official}</h2>
 <img class="flag" src="${flags.svg}" alt="Flag" width="100">
 <ul>
   <li class="capital">Capital of ${name.official} is ${capital}</li>
   <li class="population">Population: ${population}</li>
   <li class="language">Language/s is/are ${Object.values(languages).join(
     ', '
   )}</li>
 </ul>`;
      })
      .join('')
  );
}

// add markup search list
function markupListSearch(countriesList) {
  return listCountry.insertAdjacentHTML(
    'beforeend', countriesList
    .map(({ name, flags }) => {
      return `<img class="flag-list" src="${flags.svg}" alt="Flag">
    <p class="country-list">${name.official}</p>`;
    })
    .join('')
)}
