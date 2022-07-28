AOS.init();

function turnleft() {
    var scene = document.querySelector("a-scene");
    scene.querySelector("#airlockobj").object3D.rotation.y += Math.PI / 2;
    if (scene.querySelector("#airlockobj").object3D.rotation.y == 0 || scene.querySelector("#airlockobj").object3D.rotation.y == 360) {
        console.log("0")
    } else if (scene.querySelector("#airlockobj").object3D.rotation.y == Math.PI / 2) {
        console.log("90");
        scene.querySelector("#airlockobj").object3D.position.z += 4
    } else if (scene.querySelector("#airlockobj").object3D.rotation.y == Math.PI) {
        console.log("180");
        scene.querySelector("#airlockobj").object3D.position.x += 1.5
    } else if (scene.querySelector("#airlockobj").object3D.rotation.y == (Math.PI * 3) / 2) {
        scene.querySelector("#airlockobj").object3D.position.z -= 2;
        console.log("270")
    } else if (scene.querySelector("#airlockobj").object3D.rotation.y == Math.PI * 2) {
        console.log("360");
        scene.querySelector("#airlockobj").object3D.position.z -= 2;
        scene.querySelector("#airlockobj").object3D.position.x -= 1.5;
        scene.querySelector("#airlockobj").object3D.rotation.y -= Math.PI * 2
    }
}

(function () {
    "use strict";
    const select = (el, all = !1) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    };
    const on = (type, el, listener, all = !1) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach((e) => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    };
    const onscroll = (el, listener) => {
        el.addEventListener("scroll", listener)
    };
    let navbarlinks = select("#navbar .scrollto", !0);
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
                navbarlink.classList.add("active")
            } else {
                navbarlink.classList.remove("active")
            }
        })
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);
    const scrollto = (el) => {
        let header = select("#header");
        let offset = header.offsetHeight;
        let elementPos = select(el).offsetTop;
        window.scrollTo({top: elementPos - offset, behavior: "smooth"})
    };
    let selectHeader = select("#header");
    if (selectHeader) {
        let headerOffset = selectHeader.offsetTop;
        let nextElement = selectHeader.nextElementSibling;
        const headerFixed = () => {
            if (headerOffset - window.scrollY <= 0) {
                selectHeader.classList.add("fixed-top");
                nextElement.classList.add("scrolled-offset")
            } else {
                selectHeader.classList.remove("fixed-top");
                nextElement.classList.remove("scrolled-offset")
            }
        };
        window.addEventListener("load", headerFixed);
        onscroll(document, headerFixed)
    }
    on("click", ".mobile-nav-toggle", function (e) {
        select("#navbar").classList.toggle("navbar-mobile");
        this.classList.toggle("bi-list");
        this.classList.toggle("bi-x")
    });
    on("click", ".navbar .dropdown > a", function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle("dropdown-active")
        }
    }, !0);
    on("click", ".scrollto", function (e) {
        if (select(this.hash)) {
            e.preventDefault();
            let navbar = select("#navbar");
            if (navbar.classList.contains("navbar-mobile")) {
                navbar.classList.remove("navbar-mobile");
                let navbarToggle = select(".mobile-nav-toggle");
                navbarToggle.classList.toggle("bi-list");
                navbarToggle.classList.toggle("bi-x")
            }
            scrollto(this.hash)
        }
    }, !0);
    window.addEventListener("load", () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });
    new Swiper(".hero-slider", {
        speed: 1000,
        loop: !0,
        effect: "fade",
        autoplay: {delay: 5000, disableOnInteraction: !1},
    });
    new Swiper(".clients-slider", {
        speed: 400,
        loop: !0,
        autoplay: {delay: 5000, disableOnInteraction: !1},
        slidesPerView: "auto",
        pagination: {el: ".swiper-pagination", type: "bullets", clickable: !0},
        breakpoints: {
            320: {slidesPerView: 2, spaceBetween: 20},
            480: {slidesPerView: 3, spaceBetween: 20},
            640: {slidesPerView: 4, spaceBetween: 20},
            992: {slidesPerView: 6, spaceBetween: 20},
        },
    });
    window.addEventListener("load", () => {
        let portfolioContainer = select(".portfolio-container");
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: ".portfolio-item",
                layoutMode: "fitRows",
            });
            let portfolioFilters = select("#portfolio-flters li", !0);
            on("click", "#portfolio-flters li", function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove("filter-active")
                });
                this.classList.add("filter-active");
                portfolioIsotope.arrange({filter: this.getAttribute("data-filter"),});
                portfolioIsotope.on("arrangeComplete", function () {
                    AOS.refresh()
                })
            }, !0)
        }
    });
    const portfolioLightbox = GLightbox({selector: ".portfolio-lightbox"});
    new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: !0,
        autoplay: {delay: 5000, disableOnInteraction: !1},
        pagination: {el: ".swiper-pagination", type: "bullets", clickable: !0},
    })
})();
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false')
    }
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true')
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion))