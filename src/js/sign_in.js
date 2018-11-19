const signIn = document.getElementById('signIn');
const profile = document.getElementById('profile');
const mobileSign = document.getElementById('mobileSign');
const formSubmit = document.getElementById("ContactFormSubmit");
let logoutPost = new XMLHttpRequest();
let checkSign = new XMLHttpRequest();

mobileSign.addEventListener('click', () => {
	window.location.href='/signPageMobile';
})
/*formSubmit.addEventListener('click', (evt) => {
	console.log('123');
	evt.preventDefault();
	//return false;
})*/
signIn.addEventListener('click', () => {
	window.location.href='/signPage';
})

profile.addEventListener('click', () => {
	window.location.href='/login';
})
window.addEventListener('load', () => {
    checkSign.open('POST', '/', true);
    checkSign.send();
})
checkSign.onload = () => {
	if (checkSign.status == 200) {
		if (checkSign.responseText == 'true') {
			signIn.classList.add('hideElement');
    		profile.classList.remove('hideElement');
		}
		else {
			signIn.classList.remove('hideElement');
    		profile.classList.add('hideElement');
		}
	}
}
