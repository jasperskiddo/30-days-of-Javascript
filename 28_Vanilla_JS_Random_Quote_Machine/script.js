const quotes = [
  {
    quote: 'Be yourself; everyone else is already taken.',
    author: 'Oscar Wilde',
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein',
  },
  {
    quote: 'He who’s short is not always a child.',
    author: 'Nigerian proverbs',
  },
  {
    quote: 'You can’t cook yams with your anger, however hot it is.',
    author: 'Nigerian proverbs',
  },
  {
    quote:
      'Even if a goat frowns, it will be taken to the marketplace and sold. ',
    author: 'Bonaventure Chukwudi',
  },
  {
    quote:
      'Lizard that ruined its mother’s burial, what did it expect others to do?',
    author: 'African Proverb',
  },
  {
    quote:
      'Money and success don’t change people; they merely amplify what is already there.',
    author: 'Will Smith',
  },
  {
    quote:
      'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma , which is living with the results of other people’s thinking.',
    author: 'Steve Jobs',
  },
  {
    quote:
      'The big lesson in life, baby, is never be scared of anyone or anything.',
    author: 'Frank Sinatra',
  },
  {
    quote:
      'Curiosity about life in all of its aspects, I think, is still the secret of great creative people.',
    author: 'Leo Burnett',
  },
  {
    quote: 'Not how long, but how well you have lived is the main thing.',
    author: 'Seneca',
  },
  {
    quote:
      'If life were predictable it would cease to be life, and be without flavor.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote:
      'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.',
    author: 'Henry Ford',
  },
  {
    quote: 'In order to write about life first you must live it.',
    author: 'Ernest Hemingway',
  },
  {
    quote:
      'Life is not a problem to be solved, but a reality to be experienced.',
    author: 'Soren Kierkegaard',
  },
  {
    quote: 'He unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    quote: 'Turn your wounds into wisdom.',
    author: 'Oprah Winfrey',
  },
  {
    quote:
      'The way I see it, if you want the rainbow, you gotta put up with the rain.',
    author: 'Dolly Parton',
  },
  {
    quote:
      'Do all the good you can, for all the people you can, in all the ways you can, as long as you can.',
    author: 'Hillary Clinton',
  },
  {
    quote:
      'Don’t settle for what life gives you; make life better and build something.',
    author: 'Ashton Kutcher',
  },
  {
    quote:
      'Everything negative; pressure, challenges – is all an opportunity for me to rise',
    author: 'Kobe Bryant',
  },
];

const quotation = document.querySelector(".quotation");
const authorr = document.querySelector(".author");

//This Function causes javaScript to select athor and quotes on random
function randomm(){
 //This converts the array to normal string or whatever
 const realQuotes = JSON.parse(JSON.stringify(quotes));
const random = Math.floor(Math.random() * quotes.length);
 quotation.innerHTML = quotes[random].quote
 authorr.innerHTML  = quotes[random].author
}
window.onload = randomm();
