const hero = document.querySelector(".hero");
const button = document.querySelector(".refresh");
let current;

function changeBackground() {
  let number;
  do {
    number = Math.floor(Math.random() * 10) + 1;
  } while (number === current);
  current = number;
  hero.style.backgroundImage = `url("assets/images/clouds${number}.png")`;
}

changeBackground();
button.addEventListener("click", () => {
  button.classList.add("spinning");
  changeBackground();
});

button.addEventListener("animationend", () => {
  button.classList.remove("spinning");
});
