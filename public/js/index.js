const contact = document.querySelector(".contact");
const connect = document.querySelector(".connect");
const service = document.querySelector(".services");
const about = document.querySelector(".about");

connect.addEventListener("click", () => {
  window.scrollTo({
    top: 1300,
    left: 0,
    behavior: "smooth",
  });
});

about.addEventListener("click", () => {
  window.scrollTo({
    top: 775,
    left: 0,
    behavior: "smooth",
  });
});

contact.addEventListener("click", () => {
  window.scrollTo({
    top: 1750,
    left: 0,
    behavior: "smooth",
  });
});

const scrollUp = document.querySelector("#scroll-up");

const checkbox = document.querySelector("#checkbox");

// checkbox.addEventListener("click", () => {
//   // Use Toggle method to add or remove  dark class to the body

//   document.body.classList.toggle("dark");
// });

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");

hamburger.addEventListener("click", openMenu);
function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

let video = document.querySelector(".back-video");

function checkScreenWidth() {
  if (window.innerWidth < 768) {
    // You can adjust the screen width breakpoint as needed
    video.pause();
  } else {
    video.play();
  }
}

// Check screen width on page load
checkScreenWidth();

// Check screen width on window resize
window.addEventListener("resize", checkScreenWidth);
//////////////////////////////////////////////////////////////////////////////////////////////

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("number");
let message = document.getElementById("message");
// let check = document.getElementById("check");

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = {
    name: name.value,
    email: email.value,
    phone: number.value,
    message: message.value,
    // check: check.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText === "success") {
      alert("Email sent");
      name.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
    } else {
      alert("Something Went Wrong!!");
    }
  };

  xhr.send(JSON.stringify(formData));
});
