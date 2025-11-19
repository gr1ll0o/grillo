// Cambiar color de navbar al hacer scroll
document.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.style.background = window.scrollY > 20 ? "#0d0d0d" : "transparent";
});
