//This initializes the countdown variable...
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
const stopButton = document.querySelector("stopButton");


//This displays it to the screen
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  //This updates it on the head title tag...
  document.title = display;
  //This writes it to the screen...
  timerDisplay.textContent = display;
}

//This displays the time the timer will end....
function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  //this makes sure it doesn't return time in 24 hours clock instead in 12 hours...
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}
//This collects time from the buttons
function startTimer() {
  //The parseInt converts the figure from the html to numbers
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

//This sets the timer...
function timer(seconds) {
  // clear any existing timers
  //This will ensure that clicking on a timer would cause the older one to disappear...
  clearInterval(countdown);

//This sets and collects the time

  const now = Date.now();
  //this calculates and sets the current time plus the time selected by the
  //user and displays it
  const then = now + seconds * 1000;

  //This function calls the set functions and runs the values in it...
  displayTimeLeft(seconds);
  displayEndTime(then);

//This sets the interval...
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it! That is when it gets to zero...
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    console.log(secondsLeft);
    displayTimeLeft(secondsLeft);
  }, 1000);
}

//This starts the timer on the button.
buttons.forEach(button => button.addEventListener('click', startTimer));
//This selects the name instead ousing document.querySelector....
document.customForm.addEventListener('submit', function(e) {
  //This prevents it from reloading the page.
  e.preventDefault();
  //This works as thus: this.name.value
  //the name is from html.
  //Note, you can do document.name
  //instead of the long process of queryselecting it
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});

//This stops the timer by clicking the stop button
function stop(){
  clearInterval(countdown);
  const display = `0:00`;
  //This updates it on the head title tag...
  //This writes it to the screen...
  timerDisplay.textContent = display;
  endTime.textContent = `Select timer or enter minutes`;
}
