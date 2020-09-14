let secondHand = document.querySelector("#second-hand");
let minuteHand = document.querySelector("#minute-hand");
let hourHand   = document.querySelector("#hour-hand");

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds/60) * 360) + ((seconds/60)*6)  + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  const minute = now.getMinutes();
  const minuteDegree = ((minute/60) * 360) + 90;
 minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

 const hour = now.getHours();
  const hourDegree = ((hour/ 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

};

setInterval(setDate, 1000);
setDate();
