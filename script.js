// selecting the elements

const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");

//adding event to the button

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor = hexColor + color[getRandomNum()];
  }
  document.body.style.backgroundColor = hexColor;
  console.log(hexColor);
});

//generating random number

function getRandomNum() {
  return Math.floor(Math.random() * color.length);
}
