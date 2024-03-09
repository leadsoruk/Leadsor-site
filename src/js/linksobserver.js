// header scroll
const headerMarker = document.querySelector('.header-marker');
const header = document.querySelector('.header');


const optionsHeader = {
    // root: headerMarker,
    rootMargin: "100px",
    threshold: 0,
}

const callbackHeader = function (entries, observer) {
    entries.forEach((entry) => {
        entry.isIntersecting ?
            header.classList.remove('scroll') :
            header.classList.add('scroll');
    })
};
const observerHeader = new IntersectionObserver(callbackHeader, optionsHeader);

observerHeader.observe(headerMarker);

// active navLink
const navLinks = document.querySelectorAll('.nav__link');

const observerNavLink = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            })
            document.querySelector(`.nav__link[href="#${entry.target.id}"]`).classList.add('active');
        }
    });
}, {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0
});

navLinks.forEach(link => {
    const targetId = link.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    observerNavLink.observe(targetElement);
});

// sections visible
const sections = document.querySelectorAll('.invisible');

sections.forEach((section) => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            section.classList.remove('invisible');
            section.classList.add('visible');
        }
    });

    observer.observe(section);
});