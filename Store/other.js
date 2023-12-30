let menu = document.querySelector("#menu-bars");
let navBar = document.querySelector(".navbar");
let navigation = document.querySelector("header");
let t = document.querySelector(".toast");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};