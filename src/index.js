import './css/styles.css';
import Notiflix from 'notiflix';
import cardCountry from '../src/template/card-country.hbs';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const cardInfo = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(writeCountry, DEBOUNCE_DELAY));

function writeCountry(event) {
  console.log(event.target.value);
  
}

// function fetchCountries(name) {

fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`)
  .then(responce => {
   return responce.json()
  }).then(country => {
    console.log(country)
     
    cardInfo.insertAdjacentHTML("beforeend", cardCountry);
    }
)
  .catch(error => {console.log(error)});
// }

