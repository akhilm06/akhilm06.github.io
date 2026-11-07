const music = document.querySelector(".music");

music.addEventListener("click", () => {
  const isOn = music.getAttribute("aria-pressed") === "true";
  music.setAttribute("aria-pressed", !isOn);
});
