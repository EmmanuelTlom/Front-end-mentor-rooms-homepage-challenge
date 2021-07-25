const hamburger = document.querySelector(".hamburg");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slider = document.querySelectorAll(".con");
const nav = document.querySelector(".links");
const closee = document.querySelector(".close");
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");

const current = 0;

nextBtn.addEventListener("click", (e) => {
  console.log(e.currentTarget);

  const active = document.querySelector(".active");

  active.classList.remove("active");

  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add("active");
  } else {
    slider[0].classList.add("active");
  }
});

prevBtn.addEventListener("click", () => {
  const active = document.querySelector(".active");

  active.classList.remove("active");

  if (active.previousElementSibling.classList.contains("con")) {
    active.previousElementSibling.classList.add("active");
  } else {
    slider[2].classList.add("active");
  }
});

hamburger.addEventListener("click", navToggle);

closee.addEventListener("click", navOff);
let showMenu = false;

function navToggle() {
  if (!showMenu) {
    header.classList.add("show");
    hamburger.classList.add("show");
    closee.classList.add("show");
    logo.classList.add("show");

    nav.classList.add("show");
  } else {
    header.classList.remove("show");
    hamburger.classList.remove("show");
    closee.classList.remove("show");
    logo.classList.remove("show");

    nav.classList.remove("show");
  }
}

function navOff() {
  header.classList.remove("show");
  hamburger.classList.remove("show");
  closee.classList.remove("show");
  logo.classList.remove("show");

  nav.classList.remove("show");
}
