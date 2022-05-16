const nav = document.querySelector('#nav-menu');
const navOpen = document.querySelector('#navOpen');
const navClose = document.querySelector('#navClose')

navOpen.addEventListener("click", () => nav.style.display = "flex");
navClose.addEventListener("click", () => nav.style.display = "");