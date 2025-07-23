document.addEventListener("DOMContentLoaded", function () {
    // Page transition effect
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 100);

    const taskForm = document.getElementById("taskForm");
    const successMessage = document.getElementById("successMessage");

    taskForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const category = document.getElementById("category").value.trim();
        const description = document.getElementById("description").value.trim();
        const budget = document.getElementById("budget").value.trim();
        const duration = document.getElementById("duration").value.trim();
        const location = document.getElementById("location").value.trim();

        // Validate form fields
        if (category === "" || description === "" || budget === "" || duration === "" || location === "") {
            alert("Please fill in all fields before posting your task.");
            return;
        }

        if (budget <= 0 || duration <= 0) {
            alert("Please enter valid budget and duration values.");
            return;
        }

        // Display success message
        successMessage.style.display = "block";

        // Clear form fields after submission
        taskForm.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
});
