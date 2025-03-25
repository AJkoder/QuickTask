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
