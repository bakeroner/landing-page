const signIn = document.getElementById('signIn');
const profile = document.getElementById('profile');
const mobileSign = document.getElementById('mobileSign');
let logoutPost = new XMLHttpRequest();
let checkSign = new XMLHttpRequest();

mobileSign.addEventListener('click', () => {
	window.location.href='/signPageMobile';
})
signIn.addEventListener('click', () => {
	window.location.href='/signPage';
})

profile.addEventListener('click', () => {
	window.location.href='/login';
    /*logoutPost.open('POST', '/logout', true);
    logoutPost.send();*/
})
/*logoutPost.onload = () => {
    if (logoutPost.status == 200) {
    	window.location.href='/';
    }
}*/
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
