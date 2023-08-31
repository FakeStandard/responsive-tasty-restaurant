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
const sections = document.querySelectorAll('section[id')

function scrollActive() {
    //
}

window.addEventListener('scroll', scrollActive)