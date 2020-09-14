const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

//This fetches and extracts the data from the specifued url
fetch(url)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

//This creates a regex that matches what is searched for
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

//This adds a comma to it
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//This appends the found searches to the html page
function displayMatches() {
  //This matches the array with the users input
  const matchArray = findMatches(this.value, cities);
  //This does the assigning to html
  const html = matchArray.map(place => {
    //This is used to match or select the users input in order to add highlight colors
    const regex = new RegExp(this.value, 'gi');

    //This is used to add highlight color to the matched word
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');
  //this works with the above
  suggestions.innerHTML = html;
}

//This selects the class of the input to do whatever you want
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//This adds the eventListener.
//note: change listens to a change in the input
//note keyup does the same thing
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
