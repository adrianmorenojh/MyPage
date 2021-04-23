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

const logo = document.getElementById("logo");

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
  logo.setAttribute("src", "./images/logo_transparent.png");
  home.classList.add("active");
};
aboutAnchor.onclick = function () {
  removeTransition();
  document.documentElement.style.setProperty("--menu-color", "#555");
  logo.setAttribute("src", "./images/logo_transparent_black.png");
  about.classList.add("active");
};
briefcaseAnchor.onclick = function () {
  removeTransition();
  document.documentElement.style.setProperty("--menu-color", "#555");
  logo.setAttribute("src", "./images/logo_transparent_black.png");
  briefcase.classList.add("active");
};
contactAnchor.onclick = function () {
  removeTransition();
  document.documentElement.style.setProperty("--menu-color", "#555");
  logo.setAttribute("src", "./images/logo_transparent_black.png");
  contact.classList.add("active");
};
const spinner = document.getElementById("spinner");

function load() {
  spinner.style.display = "none";
  /*   alert("evento load detectado!"); */
}
window.onload = load;
/* setTimeout(load, 8000); */

const $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);
const $green = document.getElementById("response-green");
const $red = document.getElementById("response-red");
const $submit = document.getElementById("submit");

async function handleSubmit(event) {
  event.preventDefault();
  console.log("hola como vas");
  $submit.disabled = true;
  $submit.style.opacity = ".5";
  $submit.style.cursor = "await";
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    $submit.style.opacity = "1";
    $submit.disabled = false;
    $submit.style.cursor = "pointer";
    $green.style.display = "block";
  }
  if (!response.ok) {
    $submit.style.opacity = "1";
    $submit.disabled = false;
    $submit.style.cursor = "pointer";
    $red.style.display = "block";
  }
}
