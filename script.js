

const closeButton = document.querySelector('.open-nav');

var nav = document.querySelector('.nav');



closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
});



