export default function () {
const mobileMenu = document.getElementById("mobileMenu");
const clearMenu = document.getElementById("clearMenu");
const backgroundArea = document.getElementById("mobileMenuList");
const header = document.querySelector(".header__navigation");

const toggler = function() {
    mobileMenu.classList.toggle("hideElement");
    header.classList.toggle("navigation__link-menu--animation");
    clearMenu.classList.toggle("hideElement");
};

mobileMenu.addEventListener("click", function(e) {toggler()} );

clearMenu.addEventListener("click", function(e) {toggler()} );

backgroundArea.addEventListener("click", function(event) {
 let target = event.target;

 if (target.classList.contains("navigation__link-menu") == true) {
  toggler();
 }
});
}
