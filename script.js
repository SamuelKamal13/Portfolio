document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const navLinks = document.querySelectorAll("nav a");
    const container = document.querySelector(".container");
    const section = document.querySelector(".sectionName");
    const dash = document.querySelectorAll(".dash");
    const DD = document.querySelector(".DD");
    const progressBar = document.querySelectorAll(".progress-bar");

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        navLinks.forEach(link => link.classList.toggle("dark-mode"));
        container.classList.toggle("dark-mode");
        section.classList.toggle("dark-mode");
        dash.forEach(dash => dash.classList.toggle("dark-mode"));
        DD.classList.toggle("dark-mode");
        progressBar.forEach(bar => bar.classList.toggle("dark-mode"));
        toggleButton.classList.toggle("dark-mode");
    });
});
