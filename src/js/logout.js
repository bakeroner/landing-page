const logout = document.getElementById('logoutButton');

let xhr = new XMLHttpRequest();

xhr.onload = () => {
  if (xhr.status === 200) {
  window.location.href='/';
  }
}

logout.addEventListener('click', () => {
  xhr.open('POST', '/logout', true);
  xhr.send();
})