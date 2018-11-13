import 'Styles/authorization.css';
const signFromSign = document.getElementById('signButtonFromSign');
const signLogin = document.getElementById('signLogin');
const signPassword = document.getElementById('signPassword');
const signChecker = document.getElementById('signChecker');
let checked;
let login;
let password;

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