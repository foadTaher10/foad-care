const menuBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    navbar.classList.toggle("active");

});

navbar.addEventListener("click", (e) => {

    e.stopPropagation();

});

document.addEventListener("click", () => {

    navbar.classList.remove("active");

});

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});