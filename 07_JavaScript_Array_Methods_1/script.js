// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
let firstAndLastName = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);
console.log(firstAndLastName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let sortAge = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(sortAge);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let ageCombined = inventors.reduce((a, b) => {
  return a + (b.passed - b.year);
}, 0);
console.log(ageCombined);

// 5. Sort the inventors by years lived
let inventorsAge = inventors.sort((a, b) => {
  let inventorA = a.passed - a.year;
  let inventorB = b.passed - b.year;

  return inventorA > inventorB ? 1 : -1;
});

console.table(inventorsAge);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//const category = document.querySelector('.mw-category')

//The Array.from method converts a nodeList to an array.

//const links = Array.from(category.querySelectorAll('a'));
//const de = links
//  .map(link => link.textContent)
// .filter(streetName => streetName.includes('de'));

//console.log(de)

// 7. sort Exercise
// Sort the people alphabetically by last name
let sortLastNameAlphabetically = inventors.sort((a, b) => {
  let lastNameA = a.last.charAt(0);
  let lastNameB = b.last.charAt(0);
  return lastNameA > lastNameB ? 1 : -1;
});
console.table(sortLastNameAlphabetically);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'train',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];
const transportation = data.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
