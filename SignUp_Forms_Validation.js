const nameRequired = 'Name is Requied';
const emailRequred = 'Email is Required';
const invalidEmail = 'Please enter a valid email';

const form = document.getElementById('signup');

const nameValue = form.elements['name'];
const emailValue = form.elements['email'];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let validName = isValidName(nameValue.value, nameValue);
    let validEmail = isValidEmail(emailValue.value, emailValue);

    if(validName && validEmail){
        alert('success');
    }
})

function isValidName(input, element){
    if(!hasValue(input,element,nameRequired)){
        return false;
    }
    return true; 
}

function isValidEmail(input, element){
    if(!hasValue(input,element,emailRequred)){
        return false;
    }
    const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailRegex.test(input)){
        showError(element,invalidEmail)
        return false;
    }

    return true; 
}

function hasValue(input,element,message){
    if(input.trim() === ''){
        showError(element,message)
        return false;
    }
    return true;
}

function showError(element, message){
    let ele = element.parentNode.querySelector('small');
    ele.innerText = message;
}

