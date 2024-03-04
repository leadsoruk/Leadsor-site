const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const body = document.body
const menuLinks = menu.querySelectorAll('.nav__link')
const closeMenu = () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock')
}
const openMenu = () => {
    burger.classList.add('active');
    menu.classList.add('active');
    body.classList.add('lock')
}
burger.addEventListener('click', (e) => {
    burger.classList.contains('active') ? closeMenu() : openMenu();
})

menu.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        return closeMenu()
    }
})

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const blockID = link.getAttribute('href').substr(1)
        const scrollPosition = document.getElementById(blockID).getBoundingClientRect().top  + window.pageYOffset - 100
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        })

        return closeMenu()
    })
})


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
//
// const navLinks = document.querySelectorAll('.nav__link');
//
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log(entry)
//
//             entry.target.classList.add('active');
//             // entry.target.parentElement.classList.add('active');
//         } else {
//             entry.target.classList.remove('active');
//             // entry.target.parentElement.classList.remove('active');
//         }
//     });
// }, {
//     rootMargin: '0px 0px -100px 0px',
//     threshold: 0.5
// });
//
// navLinks.forEach(link => {
//     const targetId = link.getAttribute('href').slice(1);
//     const targetElement = document.getElementById(targetId);
//     // console.log(targetElement)
//     observer.observe(targetElement);
// });


const navLinks = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver(entries => {
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
    observer.observe(targetElement);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsImxpbmtzb2JzZXJ2ZXIuanMiLCJpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkVBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJylcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHlcclxuY29uc3QgbWVudUxpbmtzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19saW5rJylcclxuY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpXHJcbn1cclxuY29uc3Qgb3Blbk1lbnUgPSAoKSA9PiB7XHJcbiAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcclxufVxyXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyBjbG9zZU1lbnUoKSA6IG9wZW5NZW51KCk7XHJcbn0pXHJcblxyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldCA9PT0gZS5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNsb3NlTWVudSgpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tZW51TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGJsb2NrSUQgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cigxKVxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tJRCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICArIHdpbmRvdy5wYWdlWU9mZnNldCAtIDEwMFxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgIHRvcDogc2Nyb2xsUG9zaXRpb24sXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBjbG9zZU1lbnUoKVxyXG4gICAgfSlcclxufSlcclxuXHJcbiIsImNvbnN0IGhlYWRlck1hcmtlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbWFya2VyJyk7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuXHJcblxyXG5jb25zdCBvcHRpb25zSGVhZGVyID0ge1xyXG4gICAgLy8gcm9vdDogaGVhZGVyTWFya2VyLFxyXG4gICAgcm9vdE1hcmdpbjogXCIxMDBweFwiLFxyXG4gICAgdGhyZXNob2xkOiAwLFxyXG59XHJcblxyXG5jb25zdCBjYWxsYmFja0hlYWRlciA9IGZ1bmN0aW9uIChlbnRyaWVzLCBvYnNlcnZlcikge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgIGVudHJ5LmlzSW50ZXJzZWN0aW5nID9cclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbCcpIDpcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbCcpO1xyXG4gICAgfSlcclxufTtcclxuY29uc3Qgb2JzZXJ2ZXJIZWFkZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2tIZWFkZXIsIG9wdGlvbnNIZWFkZXIpO1xyXG5cclxub2JzZXJ2ZXJIZWFkZXIub2JzZXJ2ZShoZWFkZXJNYXJrZXIpO1xyXG5cclxuXHJcbi8vXHJcbi8vXHJcbi8vIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluaycpO1xyXG4vL1xyXG4vLyBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuLy8gICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XHJcbi8vICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVudHJ5KVxyXG4vL1xyXG4vLyAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbi8vICAgICAgICAgICAgIC8vIGVudHJ5LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuLy8gICAgICAgICAgICAgLy8gZW50cnkudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSk7XHJcbi8vIH0sIHtcclxuLy8gICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IC0xMDBweCAwcHgnLFxyXG4vLyAgICAgdGhyZXNob2xkOiAwLjVcclxuLy8gfSk7XHJcbi8vXHJcbi8vIG5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbi8vICAgICBjb25zdCB0YXJnZXRJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc2xpY2UoMSk7XHJcbi8vICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0RWxlbWVudClcclxuLy8gICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0RWxlbWVudCk7XHJcbi8vIH0pO1xyXG5cclxuXHJcbmNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluaycpO1xyXG5cclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xyXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKG5hdkxpbmsgPT4ge1xyXG4gICAgICAgICAgICAgICAgbmF2TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLm5hdl9fbGlua1tocmVmPVwiIyR7ZW50cnkudGFyZ2V0LmlkfVwiXWApLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59LCB7XHJcbiAgICByb290TWFyZ2luOiAnMHB4IDBweCAtMTAwcHggMHB4JyxcclxuICAgIHRocmVzaG9sZDogMFxyXG59KTtcclxuXHJcbm5hdkxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRJZCA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJykuc2xpY2UoMSk7XHJcbiAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXRFbGVtZW50KTtcclxufSk7IiwiIl19
