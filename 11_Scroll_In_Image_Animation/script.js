 //This function called debounce actually gives us more control. I don't even know how it works.
 //Essentially what it means is that it will call our main function which I will create below 
 //called checkSlide and it wil help us run the function every 20 millisecs as specified
 // by the wait....
 function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

//This selects all images
const imageSliders = document.querySelectorAll("img");
//The window.scrollY determines the position of the scroll of the window vertically.
//The window.innerHiegth determine the heigth of the content
//window.scrollY + window.innerHeight determines the current scroll of our window
//offsetTop gives us how far down on the window
//The imageSlider.offSetTop + imageSlider.height would give us the position of the image from bottom 
function checkSlide(event){
imageSliders.forEach(imageSlider => {
  //Halfway through the image
const scrollAt = (window.scrollY + window.innerHeight) - imageSlider.height / 2;
console.log(scrollAt);
//Bottom of the image
const imageBottom = imageSlider.offsetTop + imageSlider.height;
const isHalfShown = scrollAt > imageSlider.offsetTop;
const isScrolledPassed = window.scrollY < imageBottom;
if(isHalfShown && isScrolledPassed){
  imageSlider.classList.add("active");
} else{
  imageSlider.classList.remove("active");
}
})
}

window.addEventListener("scroll", debounce(checkSlide))
