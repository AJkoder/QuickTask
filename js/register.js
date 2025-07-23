document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const password = document.querySelector("input[name='password']");
    const confirmPassword = document.querySelector("input[name='confirm_password']");
    const phone = document.querySelector("input[name='phone']");
    const errorBox = document.querySelector(".error-messages");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        let errorMessages = [];

        // Validate phone number (10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value)) {
            isValid = false;
            errorMessages.push("Phone number must be 10 digits.");
        }

        // Validate password match
        if (password.value !== confirmPassword.value) {
            isValid = false;
            errorMessages.push("Passwords do not match.");
        }

        // Check if all fields are filled
        const inputs = document.querySelectorAll("input[required]");
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                errorMessages.push(`${input.placeholder} is required.`);
            }
        });

        // Display errors if validation fails
        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            errorBox.innerHTML = errorMessages.map(msg => `<p>${msg}</p>`).join("");
            errorBox.style.display = "block";
            return;
        }

    });
    
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form?.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        alert("Signup successful! Redirecting to login...");
        window.location.href = "selection.html";
    });
});

