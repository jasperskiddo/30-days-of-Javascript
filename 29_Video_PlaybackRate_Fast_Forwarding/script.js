  const speed = document.querySelector('.speed');
  const bar = speed.querySelector('.speed-bar');
  const video = document.querySelector('.flex');

  speed.addEventListener("mousemove", function(event){
    //This determines the position of the speed bar on the screen.
    const y = event.pageY - this.offsetTop;
    //Tthis determines the percentage
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    //This adds the main percentage
    const height = Math.round(percent * 100) + "%";
    console.log(height)
    //This determines the rate at which the video plays
    const playbackRate = percent * (max - min) + min;
    
    //This changes the bar background....
    bar.style.height = height; 
    //This updates the content of the bar.
    bar.textContent = playbackRate.toFixed(2) + "x";
    //This attaches the video playbackRate to the one we created...
    video.playbackRate = playbackRate;
  })
