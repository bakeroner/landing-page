import 'Styles/profile.css';
const logout = document.getElementById('logoutButton');
const messageText = document.getElementById('messageText');
const messageTitle = document.getElementById('messageTitle');
let xhr = new XMLHttpRequest();
let message = new XMLHttpRequest();
window.addEventListener('load', () => {
  message.open('GET', '/message', true);
  message.send();
})
message.onload = () => {
  if (message.status == 200 && message.responseText) {
    messageTitle.classList.remove('hideElement');
    let answer = JSON.parse(message.responseText);
    messageText.innerHTML = answer;
  }
}
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