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
//
// let sections = [];
//
// menuLinks.forEach(link => {
//     let href = link.getAttribute('href').substring(1);
//     let target = document.getElementById(href)
//     sections.push(target)
// })
//
// const callbackSection = (entries, observer) => {
//     entries.forEach((entry) => {
//             console.log(entry)
//         if (entry.isIntersecting) {
//
//             entry.target.src = entry.target.dataset.src
//             observer.unobserve(entry.target)
//         }
//     })
// }
//
// const optionsSection = {
//     // root: по умолчанию window, но можно задать любой элемент-контейнер
//     rootMargin: '0px',
//     threshold: 0.1,
// }
//
// const observerSection = new IntersectionObserver(callbackSection, optionsSection)
//
// sections.forEach((section) => observerSection.observe(section))
//
// // console.log(sections)
//
