 //This selects all the element with class panel
 const panels = document.querySelectorAll('.panel');

//This toggles open class
    function toggleOpen() {
      this.classList.toggle('open');
    }
//This toggles open-active class
    function toggleActive(event){
      if(event.propertyName.includes("flex")){
        this.classList.toggle("open-active")
      }
    }

//This adds event listener
     panels.forEach(panel => panel.addEventListener('click', toggleOpen));
     panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
