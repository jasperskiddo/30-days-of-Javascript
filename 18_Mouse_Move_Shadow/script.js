//This selects the stuff you desire
const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const pixel = 110; 

//This creates the function to run every one
function shadow(event){
  //This selects the main div tag height and width
  const height = hero.offsetHeight;
  const width = hero.offsetWidth;

  //This selects the target or text or h1 offset
  let x = event.offsetX;
  let y = event.offsetY;
  
  if( this !== event.target){
     x = x + event.target.offsetLeft;
     y = y + event.target.offsetTop;
  }

  //This is used to select the desired size ofoffset y and x for th text-shadow effect
 let xPixel = Math.round((x / width * pixel) - (pixel / 2));
 let yPixel = Math.round((y / height * pixel) - (pixel / 2));

//Thisa adds the desired text shadow
 text.style.textShadow = `
 ${xPixel}px ${yPixel}px 2px red,
 ${xPixel * - 1}px ${yPixel}px 3px blue,
 ${xPixel - 2}px ${yPixel * - 1}px 4px white,
 ${xPixel * - 1}px ${yPixel}px 2px orange
 `
}

hero.addEventListener("mousemove", shadow);
