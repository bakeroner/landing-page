import 'Styles/authorization.css';
const signFromSign = document.getElementById('signButtonFromSign');
const signLogin = document.getElementById('signLogin');
const signPassword = document.getElementById('signPassword');
const signChecker = document.getElementById('signChecker');

/*const socket = new WebSocket("ws://localhost:3000");

document.forms.signIn.onsubmit = function() {
  const outgoingMessage = this.username.value + this.password.value;
  socket.send(outgoingMessage);
  return false;
};

socket.onmessage = function(event) {
  const incomingMessage = event.data;
  showMessage(incomingMessage);
};

function showMessage(message) {
  alert(message);
}*/