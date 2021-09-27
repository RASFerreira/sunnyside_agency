
const menuSlide = () => {

    const menu = document.querySelector('.mobile__menu')
    const navigation = document.querySelector('.nav__items')

    menu.addEventListener('click', () => {
        navigation.classList.toggle('nav__items--active');

    })

    


};

menuSlide();