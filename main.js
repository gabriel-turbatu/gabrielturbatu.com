function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const slideshow = [
    {
        name: "url('photos/app\ dev.png')",
        text1: "APPLICATION",
        text2: "DEVELOPMENT",
        pos: 0,
    },
    {
        name: "url('photos/Simple\ macbook\ no\ text.png')",
        text1: "UX/UI",
        text2: "SOLUTIONS",
        pos: 0,
    },
    {
        name: "url('photos/it\ cons.png')",
        text1: "IT",
        text2: "CONSULTING",
        pos: 1,
    }
]

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

const sliderFunct = async () => {
    const slider = document.querySelector('.slider');
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    for(var iter = 0; iter < slideshow.length; iter++){
        slider.style.backgroundImage = slideshow[iter].name;
        text1.innerHTML = slideshow[iter].text1;
        text2.innerHTML = slideshow[iter].text2;
        if(slideshow[iter].pos == 1) {
            text1.style.marginLeft = "150px";
            text2.style.marginLeft = "0px";
        }
        else {
            text1.style.marginLeft = "0px";
            text2.style.marginLeft = "150px";
        }
        if(iter == slideshow.length - 1) iter = -1;
        await sleep(10000);
    }
}

sliderFunct();