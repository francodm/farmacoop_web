function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
const hamburger = () => {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu-options");
  burger.addEventListener("click", () => {
    menu.classList.toggle("close-menu");
    menu.classList.toggle("open-menu");
  });
  if (window.matchMedia("(max-width: 1024px)").matches) {
    const options = document.querySelectorAll(".dropdown");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        const subDrop = option.querySelector("ul");
        const arrow = option.querySelector(".drop");
        subDrop.classList.toggle("hide");
        subDrop.classList.toggle("show");
        arrow.classList.toggle("rotate-90");
      });
    });
  } else {
    const options = document.querySelectorAll(".dropdown");
    options.forEach((option) => {
      option.addEventListener("mouseenter", () => {
        const subDrop = option.querySelector("ul");
        subDrop.classList.remove("hide");
        subDrop.classList.add("show");
      });
      option.addEventListener("mouseleave", () => {
        const subDrop = option.querySelector("ul");
        subDrop.classList.add("hide");
        subDrop.classList.remove("show");
      });
    });
  }
  /* Click outside and close */
  document.addEventListener("click", function (e) {
    if (e.target.closest("#menu-options") == null && menu.classList.contains("open-menu") && e.target.closest("#burger") == null) {
      menu.classList.toggle("close-menu");
      menu.classList.toggle("open-menu");
    }
  });
};
function copyright() {
  const paragraph = `Copyright &copy; ${new Date().getFullYear()} Farmacoop`;
  const textCopy = document.querySelectorAll(".copyright");
  textCopy.forEach((text) => {
    text.innerHTML = paragraph;
  });
}
function sliderFarmacoop() {
  const slides = document.querySelectorAll(".item");
  const button = document.querySelectorAll(".button");
  let current = 0;
  let prev = 4;
  let next = 1;
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
  }
  const gotoPrev = () => (current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1));
  const gotoNext = () => (current < 4 ? gotoNum(current + 1) : gotoNum(0));
  const gotoNum = (number) => {
    current = number;
    prev = current - 1;
    next = current + 1;
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].classList.remove("prev");
      slides[i].classList.remove("next");
    }
    if (next == 5) {
      next = 0;
    }
    if (prev == -1) {
      prev = 4;
    }
    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
  };
}
function lightInBalls() {
  document.querySelector("body").addEventListener("mousemove", lightball);
  function lightball(event) {
    const balls = document.querySelectorAll(".ball div");
    balls.forEach((ball) => {
      let x = (event.clientX * 100) / (window.innerWidth / 1.25) + "%";
      let y = (event.clientY * 100) / window.innerHeight + "%";
      ball.style.top = y;
      ball.style.left = x;
    });
  }
}
function parallax() {
  const parralaxes = document.querySelectorAll(".parallax");
  addEventListener("scroll", function () {
    let scrollOffset = window.scrollY + 250;
    parralaxes.forEach(function (parralax) {
      parralax.style.backgroundPositionY = (scrollOffset - parralax.offsetTop) * -0.5 + "px";
    });
  });
  const parralaxs = document.querySelectorAll(".parallax-2");
  addEventListener("scroll", function () {
    let scrollOffset = window.scrollY + 250;
    parralaxs.forEach(function (parralax) {
      parralax.style.backgroundPositionY = (scrollOffset - parralax.offsetTop) * -0.1 + "px";
    });
  });
  const parralax = document.querySelectorAll(".product-img");
  addEventListener("scroll", function () {
    let scrollOffset = window.scrollY + window.scrollY / 100;
    parralax.forEach(function (parralax) {
      parralax.style.backgroundPositionY = (window.scrollY - parralax.offsetTop) * -0.5 + "px";
    });
  });
}
document.addEventListener(
  "DOMContentLoaded",
  (function () {
    hamburger();
    copyright();
    sliderFarmacoop();
    lightInBalls();
    parallax();
  })()
);
