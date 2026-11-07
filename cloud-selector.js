const number = Math.floor(Math.random() * 10) + 1;
const hero = document.querySelector(".hero");
hero.style.backgroundImage = `url("assets/images/clouds${number}.png")`;
