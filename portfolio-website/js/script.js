const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("active");
        menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
}