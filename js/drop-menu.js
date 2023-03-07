const burgerBtn = document.querySelector('.burger');
const dropMenu = document.querySelector('.nav-drop');

burgerBtn.addEventListener('click', e => {
    const target = e.target;

    target.classList.toggle('burger-active');
    dropMenu.classList.toggle('nav-drop--opened');

    if (dropMenu.classList.contains('nav-drop--opened')) {
        document.querySelector('body').classList.add('body-nonscroll');
    } else{
        document.querySelector('body').classList.remove('body-nonscroll');
    }
});
