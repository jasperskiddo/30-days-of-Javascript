//This once property is usually used when you dont want a user
//to click on a particular button more than once....
const divs = document.querySelectorAll("divs");

function logText(event){
 
  console.log(this.classList.value);
  console.log(this);
  event.stopPropagation();
  //This event causes the bubble caused by capture
  //i.e the situation where clicking one element nested in another 
  //causes a trigger or event on the one it was nested in..
  //do you get???
}

//This loops over The divisions and adds an eventListener to it
//Clicking on the HTML causes a bubble or ripple that in turn
//clicks the body it is enclosed in and up and up...
divs.forEach(div => div.addEventListener("click", logText, {
  //This capture property when set set to true causes
  //The capturing to move from the lowest to the highest
  //The default value which is false causes it to move from the
  //highest to the lowest
  capture: false
  //setting the event property of once to true will
  //cause it to only be clickable once, the other clicks would make it look as though not there.
  //once: true
}));


  button.addEventListener('click', () => {
    console.log('Click!!!');
  }, {
    once: true
  });
