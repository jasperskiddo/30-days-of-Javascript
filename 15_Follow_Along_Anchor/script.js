const triggers = document.querySelectorAll("a");
//This creates a new element
const highlight = document.createElement("span");
//This adds the class hightlight to the span
highlight.classList.add("highlight");
//this appends or creates the element on the  window
document.body.appendChild(highlight);

function highlightLink(){
 //This method determines the properties of each anchor element 
 //such as top, width etc
const linkCoords = this.getBoundingClientRect();
const coords = {
  width: linkCoords.width,
  height: linkCoords.height,
  top: linkCoords.top + window.scrollY,
  left: linkCoords.left + window.scrollX
}
console.log(linkCoords);
//This adds the style to the bla bla bla
highlight.style.width = `${coords.width}px`;
highlight.style.height = `${coords.height}px`;
highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

//This method iterates on each anchor element and adds an eventListener to it
triggers.forEach(a => a.addEventListener("mouseenter", highlightLink))
