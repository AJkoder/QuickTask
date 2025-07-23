document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const email = document.querySelector("input[name='email']");
    const password = document.querySelector("input[name='password']");
    const errorBox = document.querySelector(".error-messages");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        let errorMessages = [];

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            isValid = false;
            errorMessages.push("Please enter a valid email address.");
        }

        // Validate password is not empty
        if (password.value.trim() === "") {
            isValid = false;
            errorMessages.push("Password cannot be empty.");
        }

        // Display errors if validation fails
        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            errorBox.innerHTML = errorMessages.map(msg => `<p>${msg}</p>`).join("");
            errorBox.style.display = "block";
            return;
        }

        // If validation passes, show success message and redirect
        event.preventDefault(); // Prevent actual form submission for demo purposes
        alert("Login successful! Redirecting...");
        window.location.href = "selection.html"; // Redirect to the selection page
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form?.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission for demo purposes
        alert("Login successful! Redirecting...");
        window.location.href = "homepage.html";
    });
});
