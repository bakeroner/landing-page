const listHeadersCollection = document.querySelectorAll('.list--services');

[].forEach.call(listHeadersCollection, elem => {
    elem.addEventListener('click', event => {
        event.currentTarget.querySelector('.list__items').classList.toggle('hideElement');
    })
});