// dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
    const aboutMeSection = document.getElementById("about-me-section");
    
    // Add the 'visible' class to the "About Me" section after a short delay
    setTimeout(() => {
        aboutMeSection.classList.add("visible");
    }, 100); // Adjust the delay as needed (in milliseconds)

    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const navLinks = document.querySelectorAll("nav a");
    const container = document.querySelectorAll(".container");
    const section = document.querySelectorAll(".sectionName");
    const dash = document.querySelectorAll(".dash");
    const butn = document.querySelectorAll(".butn");
    const DD = document.querySelector(".DD");
    const progressBars = document.querySelectorAll(".progress");
    const contact = document.querySelectorAll(".social-media h4");
    const projectsCard = document.querySelectorAll(".project-card");

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        navLinks.forEach(link => link.classList.toggle("dark-mode"));
        container.forEach(container => container.classList.toggle("dark-mode"));
        section.forEach(section => section.classList.toggle("dark-mode"));
        dash.forEach(dash => dash.classList.toggle("dark-mode"));
        DD.classList.toggle("dark-mode");
        progressBars.forEach(bar => bar.classList.toggle("dark-mode"));
        toggleButton.classList.toggle("dark-mode");
        butn.forEach(butn => butn.classList.toggle("dark-mode"));
        contact.forEach(con => con.classList.toggle("dark-mode"));
        projectsCard.forEach(card => card.classList.toggle("dark-mode"));
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

// Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-animation");

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add("visible");
    };

    const hideScrollElement = (element) => {
        element.classList.remove("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", () => {
        handleScrollAnimation();
    });
});

// Dark Mode Toggle Button Animation
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const icon = toggleButton.querySelector("i");
    const body = document.body;

    toggleButton.addEventListener("click", () => {

        // Add animation
        icon.classList.add("spin");

        setTimeout(() => {
            if (body.classList.contains("dark-mode")) {
                icon.classList.replace("fa-moon", "fa-sun");
            } else {
                icon.classList.replace("fa-sun", "fa-moon");
            }
            icon.classList.remove("spin");
        }, 300); // Delay to match animation duration
    });
});