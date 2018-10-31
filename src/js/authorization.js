import 'Styles/authorization.css';
const signFromPop = document.getElementById('signButtonFromPop');
const popLogin = document.getElementById('popLogin');
const popPassword = document.getElementById('popPassword');
const popChecker = document.getElementById('popChecker');
const redirectButton = document.getElementById('registrationButton');
let checked;
let login;
let password;

redirectButton.addEventListener('click', function () {
	window.location.href='/newUser';
})

signFromPop.addEventListener('click', function () {

	login = popLogin.value;
	password = popPassword.value;
	checked = popChecker.checked;
	let userCredits = new XMLHttpRequest();
	userCredits.onload = () => {
		if (userCredits.status == 200) {
			alert(`${userCredits.responseText}`);
		}
		else {
			alert('Not 200');
		}
	};
	userCredits.open('GET', '/signPage/login', true);
	userCredits.setRequestHeader('login', `${login}`);
	userCredits.setRequestHeader('pass', `${password}`);
	userCredits.send();
})