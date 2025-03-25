
// Scroll Animation Observer
document.addEventListener("DOMContentLoaded", function () {
    const elementsToShow = document.querySelectorAll(".signup-container, .benefits, .categories h2, .category-grid, .category-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    elementsToShow.forEach(el => observer.observe(el));
});

