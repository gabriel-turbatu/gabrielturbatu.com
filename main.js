window.onload = function () {
    var imgs = new Array();
    for(var i = 0; i < 3; i++) imgs.push(new Image());
    imgs[0].src = 'photos/app\ dev.jpg';
    imgs[1].src = 'photos/Simple\ macbook\ no\ text.jpg';
    imgs[2].src = 'photos/it\ cons.jpg';

    for(var img of imgs){
        img.onload = function () {
            var div0 = document.querySelector('.slider')
            div0.style.backgroundImage = "url(" + img.src + ")";
        };
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const slideshow = [
    {
        name: "url('photos/app\ dev.jpg')",
        text1: "APPLICATION",
        text2: "DEVELOPMENT",
        pos: 0,
    },
    {
        name: "url('photos/Simple\ macbook\ no\ text.jpg')",
        text1: "UX/UI",
        text2: "SOLUTIONS",
        pos: 0,
    },
    {
        name: "url('photos/it\ cons.jpg')",
        text1: "IT",
        text2: "CONSULTING",
        pos: 1,
    }
]

function preloader() {
    
}

preloader()

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

var iter = 0;
const slider = document.querySelector('.slider');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');

setInterval(() => {
    slider.style.backgroundImage = slideshow[iter].name;
    text1.innerHTML = slideshow[iter].text1;
    text2.innerHTML = slideshow[iter].text2;
    console.log(window.innerWidth)
    if(window.innerWidth > 768){
        if(slideshow[iter].pos == 1) {
            text1.style.marginLeft = "150px";
            text2.style.marginLeft = "0px";
        }
        else {
            text1.style.marginLeft = "0px";
            text2.style.marginLeft = "150px";
        }
    }
    
    if(iter == slideshow.length - 1) iter = 0;
    else iter += 1;
}, 5000);

const sliderFunct = async () => {
    for(var iter = 0; iter < slideshow.length; iter++){
        slider.style.backgroundImage = slideshow[iter].name;
        text1.innerHTML = slideshow[iter].text1;
        text2.innerHTML = slideshow[iter].text2;
        console.log(window.innerWidth)
        if(window.innerWidth > 768){
            if(slideshow[iter].pos == 1) {
                text1.style.marginLeft = "150px";
                text2.style.marginLeft = "0px";
            }
            else {
                text1.style.marginLeft = "0px";
                text2.style.marginLeft = "150px";
            }
        }
        
        if(iter == slideshow.length - 1) iter = -1;
        await sleep(10000);
    }
}