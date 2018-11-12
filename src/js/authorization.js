import 'Styles/authorization.css';
const signFromPop = document.getElementById('signButtonFromPop');
const popLogin = document.getElementById('popLogin');
const popPassword = document.getElementById('popPassword');
const popChecker = document.getElementById('popChecker');
const registrationButton = document.getElementById('registrationButton');
let checked;
let login;
let password;

registrationButton.addEventListener('click', function () {
	window.location.href = '/newUser';
})

/*signFromPop.addEventListener('click', function () {

	login = popLogin.value;
	password = popPassword.value;
	checked = popChecker.checked;
	let userCredits = new XMLHttpRequest();
	userCredits.onload = () => {
		if (userCredits.status == 200) {
			alert(`${userCredits.responseText}`);
			//window.location.href='/inside';
		}
		else {
			alert('error 404');
		}
	};
	userCredits.open('GET', '/signPage/login', true);
	userCredits.setRequestHeader('login', `${login}`);
	userCredits.setRequestHeader('pass', `${password}`);
	userCredits.send();
})*/