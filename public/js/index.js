const navToggle = document.querySelector(".nav_toggle")
const navMenu = document.querySelector(".nav_menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_menu-visible");
    
    if (navMenu.classList.contains("nav_menu-visible")) {
        navToggle.setAttribute("arial-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("arial-label", "Abrir menú");
    }
});

