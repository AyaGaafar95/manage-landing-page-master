const navToggle = document.querySelector(".mobile-nave-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  // primaryNav.classList.toggle("opened");
  primaryNav.hasAttribute("data-visible")
    ? console.log("yes aya")
    : console.log("no aya");
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});
console.log("hi aya ");
// alert("aya is greate");
