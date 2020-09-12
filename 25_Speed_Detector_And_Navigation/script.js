//This takes selects the ele,ment from the html
const arrow = document.querySelector(".arrow");
const speedValue = document.querySelector(".speed-value");
//This access the user's current position
//There is getCurrentPosition
navigator.geolocation.watchPosition((data) =>{
  console.log(data)
  //You can access other values such as accuracy: 500
//altitude, altitudeAccuracy, heading, latitude, longitude, speed
//This can bbe achieved by doing parameter such as data in this case
//data.coords.speed
//The .textContent works like .innerHTML, it writes on the selected
//HTML element
  speedValue.textContent = data.coords.speed;
//To make the compass rotate, you have to add the transform property to
//change based on the coords.headings which is the change of poition based 
//in relation to the north pole.

  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (error) =>{
  //This error function, incase user does not poermit us access
  console.err(error);
  alert("You have to allow your location access to serve you better!!")
})
