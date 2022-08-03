window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

function openHeroPage()
{
    document.querySelector(".contentish").classList.add("sleepTime");
    document.querySelector(".hero-div-intro").classList.remove("sleepTime");
    navbar.classList.remove("sticky");
}

function openMainPages(){
    document.querySelector(".contentish").classList.remove("sleepTime");
    document.querySelector(".hero-div-intro").classList.add("sleepTime");
    navbar.classList.add("sticky");
    AOS.init();

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        centeredSlides: true,
        lazy: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        breakpoints: {
            600: {slidesPerView: 1, spaceBetween: 30},
            900: {slidesPerView: 3, spaceBetween: 30},
            1100: {slidesPerView: 4, spaceBetween: 30},
            1375: {slidesPerView: 5, spaceBetween: 30},
        },
    });
}


const heroSec = document.querySelector("#hero-section")
const navbar = document.querySelector(".navbar")
const navItem = document.querySelector(".nav-items")
const openNav = document.querySelector(".menu-btn")
const closeNav = document.querySelector(".cancel-btn")

openNav.onclick = () => {
    navItem.classList.add("active")
}
closeNav.onclick = () => {
    navItem.classList.remove("active")
}
window.onscroll = () => {
    const endScrollPage = document.documentElement.scrollHeight - window.innerHeight
    if (Math.ceil(window.scrollY) === endScrollPage) {
        openMainPages();
    }

    if (window.scrollY === 0) {
        openHeroPage();
    }
}

// Check if our main pages are loaded
function mainPageGo (section)
{

    const mainpages = document.querySelector(".contentish")
    if (mainpages.classList.contains("sleepTime")) {
        openMainPages()
        const sect = document.getElementById(section)
        sect.scrollIntoView();
    }

}

function scrollDown()
{
    const endScrollPage = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo(0, endScrollPage)
}