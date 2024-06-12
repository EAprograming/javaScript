//generate random number

const myLabel = document.getElementById("myLabel");
const myButton = document.getElementById("myButton");
const min = 1;
const max = 6;
let random;

myButton.onclick = () => {
  random = Math.floor(Math.random() * max) + min;
  myLabel.textContent = random;
};
