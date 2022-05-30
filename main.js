window.addEventListener("scroll", () => {
    console.log("valami")
    var navbar = document.querySelector(".header");
    navbar.classList.toggle("nav-srolled", window.scrollY > 0);
})