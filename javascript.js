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
const input2 = document.getElementById('password');
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

const btnlogin = document.querySelector('.btnlogin');
const cnxclassbtn = document.querySelector('.cnxclassbtn');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconclose = document.querySelector('.icon-close');


btnlogin.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    btnlogin.classList.add('active-btnlogin');
});
cnxclassbtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    wrapper.style.height = '440px';
});
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    wrapper.style.height = '540px';
});
iconclose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active');
    btnlogin.classList.remove('active-btnlogin');
    FormContainer.style.width = '0';
    FormContainer.style.height = '0';
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
const cnxidbtn = document.getElementById('cnxidbtn');
const FormContainer = document.getElementById('mywrapper');

Btn.addEventListener('click', function () {
    FormContainer.style.width = '400px';
    FormContainer.style.height = '440px';
});
cnxidbtn.addEventListener('click', function () {
    FormContainer.style.width = '400px';
    FormContainer.style.height = '440px';
});


const mainSections = document.querySelectorAll('main');
let currentIndex = 0;

function showNextSection() {
    mainSections[currentIndex].style.display = 'none';

    currentIndex = (currentIndex + 1) % mainSections.length;

    mainSections[currentIndex].style.display = 'block';
}

mainSections[currentIndex].style.display = 'block';

function startSlideshow() {
    slideshowInterval = setInterval(showNextSection, 5000);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

startSlideshow();

var images = ['/images/img01.jpg', '/images/img02.jpg', '/images/img03.jpg'];
var CurrentIndex = 0;

function changeImage() {
    var slideshow = document.getElementById('slideshow');
    slideshow.style.backgroundImage = "url('" + images[CurrentIndex] + "')";

    CurrentIndex++;
    if (CurrentIndex >= images.length) {
        CurrentIndex = 0;
    }
}
function startImageChange() {
    imageInterval = setInterval(changeImage, 5000);
}

function stopImageChange() {
    clearInterval(imageInterval);
}

startImageChange();

var div = document.getElementById('slideshow-container');

div.addEventListener('mouseover', function () {
    stopImageChange();
    stopSlideshow();
});

div.addEventListener('mouseout', function () {
    startImageChange();
    startSlideshow();
});

changeImage();

if (window.matchMedia('(min-width: 800px)').matches) {
    window.addEventListener('scroll', function () {
        var header = document.querySelector('.second_header');
        var scrollPosition = window.scrollY || window.pageYOffset;

        if (scrollPosition > 100) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}

const btnUp = document.querySelector('.footer_btnup');


btnUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var showButton = document.getElementById("dropbtn");
    var linkList = document.getElementById("liste");

    showButton.addEventListener("click", function () {
        linkList.style.display = "block";
    });

    document.addEventListener("click", function (event) {
        var targetElement = event.target;

        if (!showButton.contains(targetElement) && !linkList.contains(targetElement)) {
            linkList.style.display = "none";
        }
    });
});
