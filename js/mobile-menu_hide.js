const mobileMenu = document.getElementById("mobileMenu");
const clearMenu = document.getElementById("clearMenu");
const backgroundArea = document.getElementById("mobileMenuList");
const header = document.querySelector(".header__navigation");

const toggler = () => {
    mobileMenu.classList.toggle("hideElement");
    header.classList.toggle("navigation__link-menu--animation");
    clearMenu.classList.toggle("hideElement");
};

const hidder = () => {
    mobileMenuList.classList.toggle("hideElement");
    mobileMenu.classList.toggle("hideElement");
    clearMenu.classList.toggle("hideElement");
};

mobileMenu.addEventListener("click", e => toggler() );

clearMenu.addEventListener("click", e => toggler() );

backgroundArea.addEventListener("click", (event) => {
 let target = event.target;

 if (target.tagName !== "LI") {
  hidder();
 }
});