import 'Styles/profile.css';

const messageText = document.getElementById('messageText');
const messageTitle = document.getElementById('messageTitle');

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