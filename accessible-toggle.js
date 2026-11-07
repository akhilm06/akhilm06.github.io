const toggle = document.querySelector(".accessible-toggle");
const root = document.documentElement;

toggle.setAttribute("aria-pressed", root.dataset.accessible === "true");

toggle.addEventListener("click", () => {
  const isOn = root.dataset.accessible === "true";
  root.dataset.accessible = !isOn;
  toggle.setAttribute("aria-pressed", !isOn);
  try {
    localStorage.setItem("accessible", !isOn);
  } catch {}
});
