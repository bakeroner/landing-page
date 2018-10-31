const signIn = document.getElementById('signIn');
const mobileSign = document.getElementById('mobileSign');


/*function base_auth(user, pass) {
	let tok = user + ':' + pass;
	//let hash = Base64.encode(tok);
	return tok;
}*/
mobileSign.addEventListener('click', function () {
	window.location.href='/sign_page.html';
})
signIn.addEventListener('click', function () {
	window.location.href='/sign_page.html';
})
