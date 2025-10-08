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
  "blue",
  "red",
  "green", 
  "yellow",
  "pink",
  "purple",
  "orange",
  "brown",
  "grey",
  "teal",
];
const getrandomcolor = () => {
  const randomnumber = Math.floor(Math.random() * arrayofcolors.length);
  return arrayofcolors[randomnumber] 
};
getrandomcolor();
randombtn.addEventListener("click", handlerandombtnclick);
applybutton.addEventListener("click", handleapplybuttonclick);
