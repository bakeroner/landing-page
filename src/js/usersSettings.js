import 'Styles/usersPage.css';
const userList = document.getElementById('userList');
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status === 200) {
          let answer = JSON.parse(xhr.responseText);
          if (answer.length) {
            for (let i = 0; i<answer.length; i++) {
                
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete', 'control-button');
                deleteButton.setAttribute("data-user", answer[i].username);

                let grantButton = document.createElement('button');
                grantButton.textContent = 'Grant Admin';
                grantButton.classList.add('grantAdmin', 'control-button');
                grantButton.setAttribute("data-user", answer[i].username);

                let degradeButton = document.createElement('button');
                degradeButton.textContent = 'Degrade Status';
                degradeButton.classList.add('degrade', 'control-button');
                degradeButton.setAttribute("data-user", answer[i].username);

                let item = document.createElement('li');
                item.setAttribute("data-user", answer[i].username);
                item.innerHTML = `username: ${answer[i].username}<br>status: ${answer[i].status}<br>`;
                item.classList.add('listItem', 'listItem__text');
                userList.appendChild(item);
                item.appendChild(deleteButton);
                item.appendChild(grantButton);
                item.appendChild(degradeButton);
            }
          }
          else {
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete', 'control-button');
                deleteButton.setAttribute("data-user", answer.username);

                let item = document.createElement('li');
                item.innerHTML = `username: ${answer.username}<br>status: ${answer.status}<br>`;
                item.classList.add('listItem', 'listItem__text');
                userList.appendChild(item);
                item.appendChild(deleteButton);         
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
      let user;
      let userBlock;
      userList.addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains('delete')) {
          user = target.getAttribute('data-user');
          userBlock = document.querySelector(`[data-user='${user}']`);
          requestProcess('/deleteUser', target, deleteUser);
        }
        if (target.classList.contains('grantAdmin')) {
          user = target.getAttribute('data-user');
          userBlock = document.querySelector(`[data-user='${user}']`);
          requestProcess('/grantUser', target, grantUser);
        }
        if (target.classList.contains('degrade')) {
          user = target.getAttribute('data-user');
          userBlock = document.querySelector(`[data-user='${user}']`);
          requestProcess('/degradeUser', target, degradeUser);
        }
      })
      deleteUser.onload = () => {
        requestLoad(deleteUser);
      }
      grantUser.onload = () => {
        requestLoad(grantUser);
      }
      degradeUser.onload = () => {
        requestLoad(degradeUser);
      }
      function requestProcess (way, target, requestName) {
          let body = 'name=' + encodeURIComponent(user);
          requestName.open('POST', way, true);
          requestName.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          requestName.send(body);
      }
      function requestLoad (requestName) {
        if (requestName.status === 200) {
          let blockContent = userBlock.innerHTML;
          switch (requestName.responseText) {
            case 'grant':
              blockContent = blockContent.replace('status: user', 'status: admin');
              userBlock.innerHTML = blockContent;
              break;
            case 'degrade':
              blockContent = blockContent.replace('status: admin', 'status: user');
              userBlock.innerHTML = blockContent;
              break;
            case 'deleteSelf':
              console.log('delete');
              window.location.href = '/';
              break;
            case 'delete':
            userBlock.innerHTML = '';
              console.log('delete');
              break;
          }     
        }        
      }