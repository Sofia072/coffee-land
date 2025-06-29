let burger = document.getElementById("burger")
let mobileMenu = document.getElementById("mobile-menu")
let isMenuOpen = false

function toggleMenu () {
    isMenuOpen = !isMenuOpen

    burger.classList.toggle("active", isMenuOpen)
    mobileMenu.classList.toggle("active", isMenuOpen)

    if(isMenuOpen){
        document.body.style.overflow = "hidden"
    } else{
        document.body.style.overflow = ""
    }
}
burger.addEventListener("click", toggleMenu)

const mobileNavLinks = document.querySelectorAll('.mobile-menu .nav-link, .mobile-menu .header-action');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        toggleMenu();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        toggleMenu();
    }
});

