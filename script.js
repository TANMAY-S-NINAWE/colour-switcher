let randombtn = document.querySelector(" .randombutton");
let applybutton = document.querySelector(" .applybutton");
let Currentcolor = document.querySelector(" .Currentcolorvalue");
let colorinput = document.querySelector(" #colorinput");
let container = document.querySelector(".container");

console.log(colorinput, Currentcolor, applybutton, randombtn);

const changecolor = (color) => {
  container.style.backgroundColor = color;
  Currentcolor.textContent = color; 
};

const handlerandombtnclick = () => {
 let color=getrandomcolor();
changecolor(color);
};
 
const handleapplybuttonclick = () => {
  let color11 = colorinput.value;
  changecolor(color11);
};
const arrayofcolors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "gold",
  "coral",
  "salmon",
  "turquoise",
  "violet",
  "indigo",
  "chocolate",
  "crimson",
  "khaki",
  "plum",
  "tan",
  "tomato",
  "wheat"
];
const getrandomcolor = () => {
  const randomnumber = Math.floor(Math.random() * arrayofcolors.length);
  return arrayofcolors[randomnumber] 
};
getrandomcolor();
randombtn.addEventListener("click", handlerandombtnclick);
applybutton.addEventListener("click", handleapplybuttonclick);
