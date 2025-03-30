document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");

    // Header slide-in animation
    const header = document.querySelector("header");
    if (header) {
        header.style.transition = "transform 0.5s ease-in-out";
        header.style.transform = "translateY(0)";
    }

    // Hero Section Fade-In Animation
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "scale(0.95)";
        hero.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";

        setTimeout(() => {
            hero.style.opacity = "1";
            hero.style.transform = "scale(1)";
        }, 1000);
    }

    // Reveal sections on scroll
    const hiddenElements = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "opacity 1s ease-in-out, transform 0.8s ease-in-out";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    hiddenElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        observer.observe(el);
    });

    // Staggered Box Animation
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "scale(0.9)";
        el.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";

        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "scale(1)";
        }, 1500 + index * 200);
    });

    // Navigation Buttons
    document.getElementById("loginBtn")?.addEventListener("click", () => {
        console.log("Login Button Clicked");
        window.location.href = "login.html";
    });

    document.getElementById("registerBtn")?.addEventListener("click", () => {
        console.log("Register Button Clicked");
        window.location.href = "register.html";
    });

    document.getElementById("taskerBtn")?.addEventListener("click", () => {
        console.log("Tasker Button Clicked");
        window.location.href = "tasker.html";
    });
});
