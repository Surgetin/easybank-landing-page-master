const toggleMenu = document.querySelector(".menu");
const navItem = document.querySelector(".nav__lists");
const navbar = document.querySelector(".header");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    navItem.classList.toggle("active");
});

document.querySelectorAll(".nav__list-link").forEach(e => 
    e.addEventListener("click", () => {
        toggleMenu.classList.remove("active");
        navItem.classList.remove("active");
}));

window.addEventListener("scroll", () => {
    navbar.classList.toggle("nav-srolled", window.scrollY > 0);
})

