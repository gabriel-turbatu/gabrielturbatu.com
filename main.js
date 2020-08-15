function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navElems = document.querySelectorAll('.nav-list li');
    var isNavActive = false;
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navElems.forEach((link, index) => {
            if(!isNavActive)
                link.style.animation = `navListFade 0.5s ease forwards ${index/5 + 0.5}s`
            else sleep(500).then(() => {
                link.style.animation = '';
            });
        });
        isNavActive = !isNavActive;
        burger.classList.toggle('activate');
    });
}

navSlide();