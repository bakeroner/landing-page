const listHeadersCollection = document.querySelectorAll('.list--services');

[].forEach.call(listHeadersCollection, function(elem) {
    elem.addEventListener('click', function(event) {
        event.currentTarget.querySelector('.list__items').classList.toggle('hideElement');
    })
});

/*[].forEach.call(listHeadersCollection, elem => {
    elem.addEventListener('click', event => {
        event.currentTarget.querySelector('.list__items').classList.toggle('hideElement');
    })
});*/