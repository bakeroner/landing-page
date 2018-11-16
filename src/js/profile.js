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

const userButton = document.getElementById('userButton');
let userPost = new XMLHttpRequest();
userPost.onload = () => {
  if (userPost.status === 200) {
    if (userPost.responseText == 'user') {
      window.location.href = '/login/user';
    }
    else {
      window.location.href = '/login/adminPanel';
    }
  }
}
userButton.addEventListener('click', () => {
  userPost.open('POST', '/statusCheck', true);
  userPost.send();
})