document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const navLinks = document.querySelectorAll("nav a");
    const container = document.querySelectorAll(".container");
    const section = document.querySelectorAll(".sectionName");
    const dash = document.querySelectorAll(".dash");
    const DD = document.querySelector(".DD");
    const progressBars = document.querySelectorAll(".progress");

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        navLinks.forEach(link => link.classList.toggle("dark-mode"));
        container.forEach(container => container.classList.toggle("dark-mode"));
        section.forEach(section => section.classList.toggle("dark-mode"));
        dash.forEach(dash => dash.classList.toggle("dark-mode"));
        DD.classList.toggle("dark-mode");
        progressBars.forEach(bar => bar.classList.toggle("dark-mode"));
        toggleButton.classList.toggle("dark-mode");
    });

    // Trigger the animation
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.setProperty('--target-width', width);
        bar.classList.add('animated');
    });

    // Toggle Menu
    let toggleBtn = document.querySelector(".menu-toggle");
    let navs = document.querySelector(".navs");

    toggleBtn.onclick = function () {
        toggleBtn.classList.toggle("active");
        navs.classList.toggle("open");
    }
});
