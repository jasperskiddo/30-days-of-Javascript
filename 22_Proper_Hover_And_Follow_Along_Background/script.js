//this selects all the li element
const triggers = document.querySelectorAll('.cool > li');
//This selects the dropdown white body
const background = document.querySelector('.dropdownBackground');
//This selects all the nav element content
const nav = document.querySelector(".top");

function handleEnter(){
this.classList.add("trigger-enter");
//This sets the timeout or timer and it is called error function
//also animating it for 150ms
setTimeout(() => this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active"), 150);
//This animates the white background
background.classList.add("open");
//This selects one deopdown class at a time...
//it selects the one mouse entered on
const dropdown = this.querySelector(".dropdown");
//This gets the properties of the hovered on element
const dropdownCoords = dropdown.getBoundingClientRect();
//This gets the nav bar coords
const navCoords = nav.getBoundingClientRect();
//This gets the dropdownCoords height and width
const coords = {
  height: dropdownCoords.height,
  width: dropdownCoords.width,
  top: dropdownCoords.top - navCoords.top,
  left: dropdownCoords.left - navCoords.left
}
//Here, I set the height and width of the background(that is the white background
// with the arrow.)
//This is used to style HTML content directly from javascript
background.style.setProperty("height", `${coords.height}px`);
background.style.setProperty("width", `${coords.width}px`);
//this sets the position of the white background...
background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

//this removes the animation
function handleLeave(){
this.classList.remove("trigger-enter", "trigger-enter-active");
//This removes the white background.

background.classList.remove("open");
}

//This adds the eventListeners for the add and remove classList
triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLeave))
