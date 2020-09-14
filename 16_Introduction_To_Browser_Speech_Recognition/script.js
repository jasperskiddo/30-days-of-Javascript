//This selects the speechRecognition for chrome and firefox
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
//I dont know what this is but it is quite important.
recognition.interimResults = true;
recognition.lang = 'en-US';
//this creates a new p element
//You can use create element for other elements too
//to add a content or whatever to the screen do paragrapgh.textConte = whatever is it you desire
let paragraph = document.createElement("p");
//This selects the word class from the html
const words = document.querySelector(".words");
//This appens or puts the created p tag to the class words div
words.append(paragraph);

//This adds an event listener. well, we are listening for any result be it whatever

recognition.addEventListener("result", (event) => {
console.log(event.result);
//Here we convert the transcript from the browser to normal array or text
//The transcript is actually property from the nodeList in the browser speech
const transcript = Array.from(event.results)
//This makes sure that event when you say two sentences and keep quite, it will study and
//well, this particular method selects the transcript of the things you say
.map(result => result[0])
.map(result => result.transcript)
.join("");
//Incase of foul words >> You get??????
const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
p.textContent = poopScript;

//This particular line helps us to then write the text on the page
paragraph.textContent = transcript;

//This makes sure that it writes new paragrapgh without removing the preceeding one
if(event.results[0].isFinal){
  paragraph.createElement("p");
  words.append(paragraph);
}
//You can check to see if your transcript inlcudes some words
//if(transcript.includes("wuwu")) {
//console.log(1111)
//}
})
//This second event listener makes it possible for the brwoser to 
//still listen to us evn wjhen we stop and start speaking again.
recognition.addEventListener("end", recognition.start)
recognition.start();
