let elem = document.querySelector('#elem');

elem.addEventListener('click', function func() {
    let input = document.createElement('input');
    elem.insertAdjacentElement('afterend', input);
    input.value = elem.innerHTML;
    elem.innerHTML = '';

    input.addEventListener('blur', function () {
        elem.innerHTML = this.value;
        this.remove();
        elem.addEventListener('click', func);
    });



    elem.removeEventListener('click', func);
})