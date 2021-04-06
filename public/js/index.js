const burgerMenu = document.getElementById("menu");
const tools = document.getElementById("tools");
const button = document.getElementById("button");

function toggle() {
  if (burgerMenu.classList.contains("menu--open")) {
    burgerMenu.classList.remove("menu--open");
  } else {
    burgerMenu.classList.add("menu--open");
  }
  if (tools.classList.contains("tools--visible")) {
    tools.classList.remove("tools--visible");
  } else {
    tools.classList.add("tools--visible");
  }
}

burgerMenu.onclick = function () {
  toggle();
};

const home = document.getElementById("home");
const homeAnchor = document.getElementById("home-anchor");
const about = document.getElementById("about");
const aboutAnchor = document.getElementById("about-anchor");
const briefcase = document.getElementById("briefcase");
const briefcaseAnchor = document.getElementById("briefcase-anchor");
const contact = document.getElementById("contact");
const contactAnchor = document.getElementById("contact-anchor");

function removeTransition() {
  home.classList.remove("active");
  about.classList.remove("active");
  briefcase.classList.remove("active");
  contact.classList.remove("active");
}
homeAnchor.onclick = function () {
  removeTransition();
  document.documentElement.style.setProperty("--menu-color", "white");
  home.classList.add("active");
};
aboutAnchor.onclick = function () {
  removeTransition();
  document.documentElement.style.setProperty("--menu-color", "#555");
  about.classList.add("active");
};
briefcaseAnchor.onclick = function () {
  removeTransition();
  document.documentElement.style.setProperty("--menu-color", "#555");
  briefcase.classList.add("active");
};
contactAnchor.onclick = function () {
  removeTransition();
  document.documentElement.style.setProperty("--menu-color", "#555");
  contact.classList.add("active");
};
const spinner = document.getElementById("spinner");
function load() {
  spinner.style.display = "none";
  /*   alert("evento load detectado!"); */
}
setTimeout(load, 8000);
