const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const changeColor = document.querySelector('p');
      changeColor.style.color = '#BADA55';
      changeColor.style.fontSize = '50px';
    }

    function enlarge(){
      const enlarged = document.querySelector(".one");
      enlarged.style.background = "#blue";
      enlarged.style.fontSize = "70px";
      enlarged.style.color = "#DDD"
    }

    // Regular
    console.log("Normal Console");
    // Interpolated
    let sayThatName = "Bonaventure";
    let name = [...sayThatName].join("")
    console.log(`Interpolation console. say ${name}`)

    // Styled
    //Just add %c before the console.log
     console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

    // warning!
    console.warn("Dont try this at home!")
    // Error :|

    console.error("!!!Do not ever attempt this")
    // Info
    console.info("!!!You can check this out");
    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong!');
    // clearing
    //You can use this one to clear console
    console.clear()

    // Viewing DOM Elements
    //This helps for you not to cram anything.its all in thje browser
   console.log(p);
    console.dir(p);
    // Grouping together
        dogs.forEach(dog => {
      console.groupCollapsed(`${dog.name}`);
      console.log(`This is ${dog.name}`);
      console.log(`${dog.name} is ${dog.age} years old`);
      console.log(`${dog.name} is ${dog.age * 7} dog years old`);
      console.groupEnd(`${dog.name}`);
    });
    // counting
    console.count("AAaaA")
    console.count('jhghgbjh');
    console.count("Boss and Boss");

    // timing

     console.time('fetching data');
    fetch('https://api.github.com/bonaryhme')
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
      });

    console.table(dogs);
