const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;
function markThrough(event) {
  // Check if they had the shift key down and determine what they are checking
  let inBetween = false;
  //This listens for an event from the user
  if (event.ctrlKey || event.shiftKey && this.checked) {
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", markThrough))
