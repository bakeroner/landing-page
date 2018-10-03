const mobileMenu = document.getElementById("mobileMenu");
const clearMenu = document.getElementById("clearMenu");
const backgroundArea = document.getElementById("mobileMenuList");
const header = document.querySelector(".header__navigation");

let counter = 0;
mobileMenu.addEventListener("click", (event) => {
	let target=event.target;
	setTimeout(function() {
	mobileMenu.classList.toggle("hideElement");		 
	header.classList.toggle("navigation__link-menu--animation");
	clearMenu.classList.toggle("hideElement");
  }, 400);
})
clearMenu.addEventListener("click", (event) => {
	let target=event.target;	
	setTimeout(function() {
	clearMenu.classList.toggle("hideElement");
	header.classList.toggle("navigation__link-menu--animation");
    mobileMenu.classList.toggle("hideElement");
	
  }, 400);	
})
backgroundArea.addEventListener("click", (event) => {
	let target=event.target;
	if (target.tagName != "LI") {
	mobileMenuList.classList.toggle("hideElement");
	mobileMenu.classList.toggle("hideElement");
	clearMenu.classList.toggle("hideElement");
	}
})




