//adding Array.from() method converts a nodeList to an array
//you can also use spread method to convert a nodeList to an array. 
//i.e doing [...the list ]
//e.g const timeNodes = [...document.querySelectorAll("[data-time]")];
const timeNodes = Array.from(document.querySelectorAll("[data-time]"));
//The timeNode.dataset.time actually selects the data-time value
const time = timeNodes
              .map( timeNode => timeNode.dataset.time)
              //down here I will use map, split and destructuring to assign the values from the method
              //above to minutes and seconds
              .map( timeCode => {
                //this method actually converts the string of numbers to actual numbers
                const [mins, secs] = timeCode.split(":").map(parseFloat)
                return (mins * 60) + secs;
              })
              //This method adds all the numbers together
              .reduce((a, b) =>{
                return a + b
              });
   //This maths distributes the figures to hour, minute and seconds          
const gTime = time;
const hours = Math.floor(gTime / 3600);
const remainingMins = gTime % 3600;
const minutes = Math.floor(remainingMins / 60);
const remainingSecs = remainingMins % 60;
const seconds = remainingSecs;
console.info( hours, minutes, seconds)
