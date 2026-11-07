const toggle = document.querySelector(".contrast-toggle");
const root = document.documentElement;

toggle.setAttribute("aria-pressed", root.dataset.contrast === "true");

toggle.addEventListener("click", () => {
  const isOn = root.dataset.contrast === "true";
  root.dataset.contrast = !isOn;
  toggle.setAttribute("aria-pressed", !isOn);
  try {
    localStorage.setItem("contrast", !isOn);
  } catch {}
});
