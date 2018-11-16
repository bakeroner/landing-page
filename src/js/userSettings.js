import 'Styles/userPage.css';
const userList = document.getElementById('userList');
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status === 200) {
          //let item = document.createElement("p");
          let answer = JSON.parse(xhr.responseText);
          if (answer.length) {
            for (let i = 0; i<answer.length; i++) {
                
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete');
                deleteButton.setAttribute("data-user", answer[i].username);

                let grantButton = document.createElement('button');
                grantButton.textContent = 'GrantAdmin';
                grantButton.classList.add('grantAdmin');
                grantButton.setAttribute("data-user", answer[i].username);

                let degradeButton = document.createElement('button');
                degradeButton.textContent = 'DegradeStatus';
                degradeButton.classList.add('degrade');
                degradeButton.setAttribute("data-user", answer[i].username);

                let item = document.createElement('li');
                item.innerHTML = 'username: ' + answer[i].username + '; status: ' + answer[i].status;
                item.classList.add('listItem');
                userList.appendChild(item);
                item.appendChild(deleteButton);
                item.appendChild(grantButton);
                item.appendChild(degradeButton);
            }
          }
          else {
            let item = document.createElement('li');
            item.innerHTML = 'username: ' + answer.username + '; status: ' + answer.status;
            item.classList.add('listItem');
            userList.appendChild(item);            
          }
        }
      }
      window.addEventListener('load', () => {
        xhr.open('POST', '/userFiller', true);
        xhr.send();
      })
      let deleteUser = new XMLHttpRequest();
      let grantUser = new XMLHttpRequest();
      let degradeUser = new XMLHttpRequest();
      userList.addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains('delete')) {
          requestProcess('/deleteUser', target, deleteUser);
        }
        if (target.classList.contains('grantAdmin')) {
          requestProcess('/grantUser', target, grantUser);
        }
        if (target.classList.contains('degrade')) {
          requestProcess('/degradeUser', target, degradeUser);
        }
      })
      deleteUser.onload = requestLoad(deleteUser);
      grantUser.onload = requestLoad(grantUser);
      degradeUser.onload = requestLoad(degradeUser);
      function requestProcess (way, target, requestName) {
          let user = target.getAttribute('data-user');
          let body = 'name=' + encodeURIComponent(user);
          console.log(user);
          requestName.open('POST', way, true);
          requestName.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          requestName.send(body);
      }
      function requestLoad (requestName) {
        if (requestName.status === 200) {
          window.location.href = '/login/adminPanel';       
        }        
      }