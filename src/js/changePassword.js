import 'Styles/changePassword.css';

const newPassField = document.getElementById('newPassField');
const newPassFieldConfirm = document.getElementById('newPassFieldConfirm');
console.log(newPassField);
console.log(newPassFieldConfirm);
const validatePassword = () => {
	if (newPassField.value !== newPassFieldConfirm.value) {
		if (newPassField.classList.contains('text-field__border')) {
			newPassField.classList.replace('text-field__border', 'text-field__validate-error-border');
			newPassFieldConfirm.classList.replace('text-field__border', 'text-field__validate-error-border');
		}
		else {
			newPassField.classList.replace('text-field__validate-border', 'text-field__validate-error-border');
			newPassFieldConfirm.classList.replace('text-field__validate-border', 'text-field__validate-error-border');			
		}
	}
	else {
		if (newPassField.classList.contains('text-field__validate-error-border')) {
			newPassField.classList.replace('text-field__validate-error-border', 'text-field__validate-border');
			newPassFieldConfirm.classList.replace('text-field__validate-error-border', 'text-field__validate-border');
		}
		else {
			newPassField.classList.replace('text-field__border', 'text-field__validate-border');
			newPassFieldConfirm.classList.replace('text-field__border', 'text-field__validate-border');			
		}
	} 
}
newPassField.onkeyup = validatePassword;
newPassField.onchange = validatePassword;
newPassFieldConfirm.onkeyup = validatePassword;
newPassFieldConfirm.onchange = validatePassword;