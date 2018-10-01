const mobileMenu = document.getElementById("mobileMenu");
const clearMenu = document.getElementById("clearMenu");
const backgroundArea = document.getElementById("mobileMenuList");
let counter = 0;
mobileMenu.addEventListener("click", (event) => {
	let target=event.target;
	mobileMenuList.classList.toggle("hideElement");
	mobileMenu.classList.toggle("hideElement");
	clearMenu.classList.toggle("hideElement");
})
clearMenu.addEventListener("click", (event) => {
	let target=event.target;
	mobileMenuList.classList.toggle("hideElement");
	mobileMenu.classList.toggle("hideElement");
	clearMenu.classList.toggle("hideElement");
})
backgroundArea.addEventListener("click", (event) => {
	let target=event.target;
	if (target.tagName != "LI") {
	mobileMenuList.classList.toggle("hideElement");
	mobileMenu.classList.toggle("hideElement");
	clearMenu.classList.toggle("hideElement");
	}
})




