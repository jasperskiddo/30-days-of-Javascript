const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const bandList = document.querySelector("#bands");
const joinList = bands
    .sort()
    .map((band, index) => 
     `<li class="${index}">${band}</li>` 
    )
    .join("");
 console.log(joinList)
 bandList.innerHTML= joinList;

