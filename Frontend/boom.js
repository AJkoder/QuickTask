document.addEventListener("DOMContentLoaded", function () {
    let taskSection = document.querySelector(".task-list");

    function revealOnScroll() {
        let rect = taskSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            taskSection.style.animation = "spreadItems 1s ease-out forwards";
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let taskBoxes = document.querySelectorAll(".box");

    setTimeout(() => {
        taskBoxes.forEach(box => {
            box.style.position = "relative"; // Reset positioning after animation
        });
    }, 1500); // Wait until animation is done
});

