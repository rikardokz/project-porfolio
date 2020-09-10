// add a photo fade out
const aboutMeBtn = document.getElementById("btn2");
const aboutEl = document.getElementById("hidden-about");

// event listeners
aboutMeBtn.addEventListener("click", () => {
  aboutEl.style.display = "flex";
});

window.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn2")) {
    aboutEl.style.display = "none";
  }
});
