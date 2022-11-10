const BASE_URL = 'https://restcountries.com/v3.1/name/'
// const fields = 'fields=name,capital,population,flags,languages'

export default function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      return response.json()});
    
}