const acceptButton = document.getElementById('newUserConfirm');
const newUserLogin = document.getElementById('newUserLogin');
const newUserEmail = document.getElementById('newUserEmail');
const newUserPassword = document.getElementById('newUserPassword');
const newUserPasswordConfirm = document.getElementById('newUserPasswordConfirm');

acceptButton.addEventListener('click', function () {
	if (newUserLogin.value && newUserEmail.value && newUserPassword.value && newUserPassword.value == newUserPasswordConfirm.value) {
		let newUserCredits = new XMLHttpRequest();
		newUserCredits.onload = () => {
			if (newUserCredits.status == 200) {
				alert(`${newUserCredits.responseText}`);
			}
			else {
				alert('error Not 404');
			}
		};
		newUserCredits.open('GET', '/newUser/login', true);
		newUserCredits.setRequestHeader('login', `${newUserLogin.value}`);
		newUserCredits.setRequestHeader('pass', `${newUserPassword.value}`);
		newUserCredits.send();
	}
	else {
		alert('empty fields');
		console.log(`log: ${newUserLogin.value} email: ${newUserEmail.value} pass: ${newUserPassword.value} passconf: ${newUserPasswordConfirm.value}`);
	}
})