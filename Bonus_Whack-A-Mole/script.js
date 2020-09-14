const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
//This initializes variables used in the functions
  let lastHole;
  let timeUp = false;
  let score = 0;

//This creates the time frame for the gane
  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

//This makes the holes random
  function randomHole(holes) {
    //This amkes it random
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    //This makes sure that when it selects a whole, it wouldn't select it twice consecutively
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }
//This makes the mole pop up randwomly
  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }
//This runs the game
  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000)
  }
//This Makes sure that one actually plays the game and not using Javascript to play it
  function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  moles.forEach(mole => mole.addEventListener('click', bonk));
