document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Mobile Menu Toggle ---
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-list a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("active");
        });
    });


    // --- 2. Scroll Animation (Intersection Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    // Target all elements with the class 'hidden'
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));


    // --- 3. Dynamic Year in Footer ---
    const yearSpan = document.getElementById("year");
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});