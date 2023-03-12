const menu_open = document.querySelector(".menu_open");
const menu_close = document.querySelector(".menu_close");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

function toggleNav() {
  sidebar.classList.toggle("open");
  body.classList.toggle("menu_opened");
}

menu_close.addEventListener("click", toggleNav);
menu_open.addEventListener("click", toggleNav);
