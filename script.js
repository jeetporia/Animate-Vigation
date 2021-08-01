const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItem = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(animation1 , animation2) {
    navItem.forEach((nav,i) => {
        nav.classList.replace(`slide-${animation1}-${i +1 }`, `slide-${animation2}-${i + 1}`);
    })
}

function toggleNav() {
    // Toggle Menu bar Open/closed
    menuBars.classList.toggle('change');
    // Toggle : menu active or not
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')) {
        // Animate in overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right')
        // Animate in Nav Items
        navAnimation('out','in');

    } else {
        // Animate out overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimation('in', 'out')
    }
}   
// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItem.forEach((nav) => {
    nav.addEventListener('click', toggleNav)
})