let reg = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/;

let inp = document.querySelector('#order-phone');
let errField = document.querySelector('.order-err-msg');

document.querySelector('.order-submit-btn').onclick = function (e) {
    e.preventDefault();
    if (!validate(reg, inp.value)) {
        notValid(errField, errField, 'Invalid format')
        console.log('Error')
    } else {
        valid(errField, errField, '')
        console.log('Valid number')
        console.log(inp.value)
    }
}

function validate(regex, errField) {
    return regex.test(errField)
}

function notValid(errField, errElem, msg) {
    errField.classList.add('is-invalid')
    errField.classList.remove('is-valid')
    errElem.innerHTML = msg;
}

function valid(errField, errElem, msg) {
    errField.classList.remove('is-invalid')
    errField.classList.add('is-valid')
    errElem.innerHTML = msg;
}
