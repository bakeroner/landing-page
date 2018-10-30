const signIn = document.getElementById('signIn');
const signBlock = document.getElementById('signBlock');
const mobileSign = document.getElementById('mobileSign');

const signFromPop = document.getElementById('signButtonFromPop');
const popLogin = document.getElementById('popLogin');
const popPassword = document.getElementById('popPassword');
const popChecker = document.getElementById('popChecker');
let checked;
let login;
let password;
/*function base_auth(user, pass) {
	let tok = user + ':' + pass;
	//let hash = Base64.encode(tok);
	return tok;
}*/
mobileSign.addEventListener('click', function () {
	signBlock.classList.remove('hideElement');
})
signIn.addEventListener('click', function () {
	signBlock.classList.remove('hideElement');
})
signFromPop.addEventListener('click', function () {
	//let auth = base_auth(popLogin.value, popPassword.value);
	login = popLogin.value;
	password = popPassword.value;
	//console.log(auth);
	checked = popChecker.checked;

	let userCredits = new XMLHttpRequest();
	userCredits.onload = () => {
		if (userCredits.status == 200) {
			alert(`${userCredits.responseText}`);
			//window.open('')
		}
		else {
			alert('Not 200');
		}
	};
	//userCredits.open('GET', 'backend/after_auth.html', true);
	userCredits.open('GET', '/index/login', true);
	//userCredits.setRequestHeader("authorization", auth);
	userCredits.setRequestHeader('login', `${login}`);
	userCredits.setRequestHeader('pass', `${password}`);
	userCredits.send();
})