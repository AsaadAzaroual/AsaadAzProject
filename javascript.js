document.getElementById('myForm').addEventListener('submit', function (event) {
    const inputElement = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');
    const inputValue = inputElement.value;

    if (!inputValue.includes('@')) {
        errorMessage.style.display = 'block';
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none';
    }
});

const input1 = document.getElementById('email');
const input2 = document.getElementById('pass');
const btnElement = document.querySelector('.btn');
const wrapper = document.querySelector('.wrapper');

input1.addEventListener('input', checkInputsValidity);
input2.addEventListener('input', checkInputsValidity);

function checkInputsValidity() {
    if (input1.validity.valid && input2.validity.valid) {
        btnElement.classList.add('animate');
        wrapper.classList.add('hover');
    } else {
        btnElement.classList.remove('animate');
        wrapper.classList.remove('hover');
    }
}

// const iconclose = document.querySelector('.icon-close');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnlogin = document.querySelector('.btnlogin');
// iconclose.addEventListener('click', () => {
//     wrapper.classList.remove('active-popup');
// });
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.style.height = '540px';

});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.style.height = '440px';
});
btnlogin.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    btnlogin.classList.add('active-btnlogin');

});

const loginBtn = document.getElementById('loginBtn');
const loginFormContainer = document.getElementById('myForm');

loginBtn.addEventListener('click', function () {
    loginFormContainer.classList.add('show-form');
});

loginFormContainer.addEventListener('click', function (e) {
    if (e.target === loginFormContainer) {
        loginFormContainer.classList.remove('show-form');
    }
});

const Btn = document.getElementById('loginBtn');
const FormContainer = document.getElementById('mywrapper');
const iconclose = document.querySelector('.icon-close');

Btn.addEventListener('click', function () {
    FormContainer.style.width = '400px';
    FormContainer.style.height = '440px';
});
iconclose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    btnlogin.classList.remove('active-btnlogin');
    FormContainer.style.width = '0';
    FormContainer.style.height = '0';
});
// FormContainer.addEventListener('mouseover', () => {
//     FormContainer.style.width = '500px';
//     FormContainer.style.height = '540px';
// });

// FormContainer.addEventListener('mouseout', () => {
//     FormContainer.style.width = '400px';
//     FormContainer.style.height = '440px';
// });

// FormContainer.addEventListener('click', function (e) {
//     if (e.target === FormContainer) {
//         FormContainer.style.width = '0';
//         FormContainer.style.height = '0';
//     }
// });

const mainSections = document.querySelectorAll('main');
let currentIndex = 0;

function showNextSection() {
    mainSections[currentIndex].style.display = 'none';

    currentIndex = (currentIndex + 1) % mainSections.length;

    mainSections[currentIndex].style.display = 'block';
}

mainSections[currentIndex].style.display = 'block';

setInterval(showNextSection, 5000);

var images = ['img01.jpg', 'img02.jpg', 'img03.jpg'];
var CurrentIndex = 0;

function changeImage() {
    var slideshow = document.getElementById('slideshow');
    slideshow.style.backgroundImage = "url('" + images[CurrentIndex] + "')";

    CurrentIndex++;
    if (CurrentIndex >= images.length) {
        CurrentIndex = 0;
    }
}

changeImage();

setInterval(changeImage, 5000);

window.addEventListener('scroll', function () {
    var header = document.querySelector('.second_header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});