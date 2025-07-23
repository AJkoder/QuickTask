document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    // Set initial opacity but avoid translateY
    container.style.opacity = "0";

    setTimeout(() => {
        container.style.transition = "opacity 0.8s ease-in-out";
        container.style.opacity = "1";
    }, 100);

    // Redirect functions
    document.querySelector(".tasker-btn").addEventListener("click", function () {
        window.location.href = "tasker.html";
    });

    document.querySelector(".employer-btn").addEventListener("click", function () {
        window.location.href = "employer.html";
    });

    document.querySelector(".helpdesk").addEventListener("click", function () {
        alert("Redirecting to Helpdesk...");
        window.location.href = "helpdesk.html";
    });
});