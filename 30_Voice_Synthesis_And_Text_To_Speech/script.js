 //This is what initializes every speech detection and conversion
 const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  //This is where the text area input is gotten and ready for conversion
  //to speech
  msg.text = document.querySelector('[name="text"]').value;

//This function adds the provided voices by the browser to the
//select tag and options

  function populateVoices() {
    //the .getVoices() helps it to get the provided voices
    voices = this.getVoices();
    //This maps over the selected voices and writes them in the
    //options tag
    voicesDropdown.innerHTML = voices
    // .filter(voice => voice.lang.includes('en'))
    //This filters for the voice that include just english
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }
//This sets and changes the voice to the one selected by the user from
//The dropdown
  function setVoice() {
    //This loops the provided voice and when the user selects a 
    //voice, it is assigned to the msg.voice property.
    //So, the new voice becomes the selected voice by the sur
    //note: the this.voice is the selected voice
    //voice.name is provided in the list of the property 
    //in the speechSythesisUterrances, same as .voice...
    msg.voice = voices.find(voice => voice.name === this.value);
    //This toggle actually causes it to stop,
    //That is after creating it and passing the neccessary methods to it
    toggle();
  }

//This is the function that causes the voice playing to stop, on 
//changing to another voice.
  function toggle(startOver = true) {
    //this is the actual methodthat does the svoice stopping!
    speechSynthesis.cancel();
    //This causes it to start over.
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }
//Thios function makes the sliders work
  function setOption() {
    //This gets the value and name of the sliders and updates it
    //Now the assigns it to the msg from above
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
  }
//This speechSynthesis is what actually populates the lists.
  speechSynthesis.addEventListener('voiceschanged', populateVoices);
 //This actually triggers the change event by the user.
  voicesDropdown.addEventListener('change', setVoice);
  //This causes it the sliders to works as specified
  options.forEach(option => option.addEventListener('change', setOption));
  //This assigns the speak button to make it work and start the voivce
  speakButton.addEventListener('click', toggle);
  //This causes the stop button to work
  stopButton.addEventListener('click', () => toggle(false));
  //The function can be called as such
  // function(){
  //  toggle(false)
  // }

  //This also works
  //toggle.bind(null, false)
