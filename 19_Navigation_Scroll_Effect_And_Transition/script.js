 const nav = document.querySelector('#main');
 let topOfNav = nav.offsetTop;

//This function checks to see if the navigation has gotten 
//to the top of the screen.
function fixNav() {
  //This checks when the scrollY which is vertical scroll becomes 
  //greater than or equal the offsetTop.
  if (window.scrollY >= topOfNav) {
    //This makes sure that when the nav becomes fixed, it doesnt spil everything for us
    //You know what I mean????
   document.body.style.paddingTop = nav.offsetHeight + 'px';
   document.body.classList.add('fixed-nav');
  } else {
  document.body.classList.remove('fixed-nav');
 document.body.style.paddingTop = 0;
    }
  }
//This event listener adds the function to the screen and makes it work
window.addEventListener('scroll', fixNav);
