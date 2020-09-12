const inputs = document.querySelectorAll(".controls input");

function handleUpdate(event){
  //dataset is used to bring out every data attribute you have 
  //created in the html.
  //So the sizing below is actually from the data-sizing in the html.
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(`--${this.name}`, + this.value + suffix);

}

//This iterates through the given variables( the first line of code in this page) and adds an eventListener.
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
