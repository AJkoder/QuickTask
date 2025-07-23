document.addEventListener("DOMContentLoaded", function () {
    // Sidebar navigation functionality
    const sidebarLinks = document.querySelectorAll(".sidebar a");
    const profileContent = document.querySelector(".profile-content h1");

    sidebarLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page reload

            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove("active"));

            // Add active class to the clicked link
            this.classList.add("active");

            // Change content dynamically
            profileContent.innerText = `Welcome to ${this.innerText}`;
        });
    });

    // Logout button functionality
    const logoutButton = document.querySelector(".logout-button");
    logoutButton.addEventListener("click", function () {
        const confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            window.location.href = "login.html"; // Redirect to login page
        }
    });

    // Task hover effect (for additional UI experience)
    const taskImages = document.querySelectorAll(".task-grid img");
    taskImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.3)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.boxShadow = "none";
        });
    });
});
