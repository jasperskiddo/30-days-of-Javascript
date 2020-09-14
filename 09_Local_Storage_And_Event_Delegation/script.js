
  
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  //step 1. This helps to keep the items so that it is unaffected by refreshing the page
  const items = JSON.parse(localStorage.getItem("items")) || [];

  

  function addItem(event){
    //This prevents it from reloading the page.
    event.preventDefault();
    //This selects the input from the user
   const text = this.querySelector("[name='item']").value;
   //This displays it to the console
   const item = {
     text,
     done: false
   }
   items.push(item);
   populateList(items, itemsList);
     //step 2. This helps to keep the items so that it is unaffected by refreshing the page
   localStorage.setItem("items", JSON.stringify(items));
   //This resets the input form after hitting submit.
   this.reset()
  }

//This loops over all the input by the user and adds it to the desired 
//Place on the screeen
  function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate, index) => {
      return `
      <li>
        <input type="checkbox" data-index="${index}" id="item${index}" ${plate.done ? "checked" : ""}>
        <label for="item${index}"> ${plate.text}</label>
      </li>
      `
    }).join("");
  }

    
  //This is to uncheck the whole list by the user
//This creates a reset button to uncheck it
//It uses jQuery
  $('.btn').click(function() {
$('input[type=checkbox]').each(function() 
  { 
        this.checked = false; 
  }); 
})

//This is called an event delagation.
//This was set to control the checking, so it doesnt change or go away on refreshing the page.
  function toggleDone(event){
     if(!event.target.matches("input")) return;
     const getTarget = event.target;
     const indice = getTarget.dataset.index;
     items[indice].done = !items[indice].done;
     localStorage.setItem("items", JSON.stringify(items));
     populateList(items, itemsList);
  }
  //step 3. This helps to keep the items so that it is unaffected by refreshing the page
  populateList(items, itemsList);
  addItems.addEventListener("submit", addItem);
  itemsList.addEventListener("click", toggleDone);
  
