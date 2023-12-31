/* Show Menu */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    // Check that variables exist
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            // add 'show-menu' class to id is 'nav-menu'
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    // When click 'nav-link', remove the 'show-menu' class
    navMenu.classList.remove('show-menu')
}

// Add 'linkAction' function on each 'nav-link'
navLink.forEach(f => f.addEventListener('click', linkAction))


/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    
    sections.forEach(f => {
        const height = f.offsetHeight
        const top = f.offsetTop - 50
        sectionId = f.getAttribute('id')

        if (scrollY > top && scrollY <= top + height) {
            const menu = document.querySelector('.nav-menu')
            const href = document.querySelector('.nav-menu a[href*=about]')
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* Change Background Header */
function scrollHeader() {
    const nav = document.getElementById('header')

    if (this.scrollY >= 200) {
        nav.classList.add('scroll-header')
    } else {
        nav.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader)

/* Show Scroll Top */
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll')
    } else {
        scrollTop.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollTop)

/* Dark Light Theme */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previosuly selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* Scroll Reveal Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal(`.home-data, .home-img,
            .aboout-data, .about-img,
            .services-content, .menu-content,
            .app-data, .app-img
            .contact-data, .contact-button,
            .footer-content`, {
    interval: 200
})