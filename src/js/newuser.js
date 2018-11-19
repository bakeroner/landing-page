import 'Styles/registration.css';

const newUserPassword = document.getElementById('newUserPassword');
const newUserPasswordConfirm = document.getElementById('newUserPasswordConfirm');

const validatePassword = () => {
	
	if (newUserPassword.value !== newUserPasswordConfirm.value) {
		if (newUserPassword.classList.contains('text-field__border')) {
			newUserPassword.classList.replace('text-field__border', 'text-field__validate-error-border');
			newUserPasswordConfirm.classList.replace('text-field__border', 'text-field__validate-error-border');
		}
		else {
			newUserPassword.classList.replace('text-field__validate-border', 'text-field__validate-error-border');
			newUserPasswordConfirm.classList.replace('text-field__validate-border', 'text-field__validate-error-border');			
		}
	}
	else {
		if (newUserPassword.classList.contains('text-field__validate-error-border')) {
			newUserPassword.classList.replace('text-field__validate-error-border', 'text-field__validate-border');
			newUserPasswordConfirm.classList.replace('text-field__validate-error-border', 'text-field__validate-border');
		}
		else {
			newUserPassword.classList.replace('text-field__border', 'text-field__validate-border');
			newUserPasswordConfirm.classList.replace('text-field__border', 'text-field__validate-border');			
		}
	} 
}
newUserPassword.onkeyup = validatePassword;
newUserPassword.onchange = validatePassword;
newUserPasswordConfirm.onkeyup = validatePassword;
newUserPasswordConfirm.onchange = validatePassword;