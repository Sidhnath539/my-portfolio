/*========================= Toggle Icon Navbar ===============================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Corrected from 'oneclick' to 'onclick'
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========================= Scroll Sections Active Link ===============================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Corrected selector syntax
                let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    /*========================= Sticky Navbar ===============================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    /*========================= Remove Toggle Icon and Navbar When Click Navbar Link ===============================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*========================= ScrollReveal Animations ===============================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio, .contact form', { origin: 'bottom' }); // Fixed typo in selector
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*========================= Typed.js ===============================*/
const typed = new Typed('.multiple-text', {
    strings: ['B Tech Student', 'Computer Science & Engineering Branch'], // Fixed typo: "You Tube" → "YouTuber"
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
