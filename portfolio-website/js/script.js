const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
    document.body.classList.toggle("dark-theme", theme === "dark");

    if (themeToggle) {
        themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
        themeToggle.setAttribute(
            "aria-label",
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        );
    }

    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

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

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const currentTheme = document.body.classList.contains("dark-theme") ? "dark" : "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });
}