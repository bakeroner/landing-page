const mobileMenu = document.getElementById("mobileMenu");
const clearMenu = document.getElementById("clearMenu");
const mobileMenuList = document.getElementById("mobileMenuList");
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