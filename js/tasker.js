document.addEventListener("DOMContentLoaded", function () {
    const getStartedBtn = document.querySelector(".btn[href='#signup-section']");
    const signupSection = document.getElementById("signup-section");
    const locationInput = document.getElementById("location");
    const form = document.querySelector("form");

    // Smooth Scroll to Signup Section
    if (getStartedBtn && signupSection) {
        getStartedBtn.addEventListener("click", function (event) {
            event.preventDefault();
            signupSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Auto-fill Location Using Geolocation API
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                // Fetch location details using OpenStreetMap API
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.address) {
                            locationInput.value = data.address.city || data.address.state || "Location not found";
                        }
                    })
                    .catch(error => console.log("Error fetching location:", error));
            },
            function (error) {
                console.log("Geolocation error:", error);
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser.");
    }

    // Form Validation & Submission Handling
    if (form) {
        form.addEventListener("submit", function (event) {
            const locationValue = locationInput.value.trim();
            const categoryValue = document.getElementById("category")?.value.trim(); // Optional chaining in case element is missing
            let isValid = true;
            let errorMessages = [];

            if (locationValue === "" || categoryValue === "") {
                isValid = false;
                errorMessages.push("Please fill in all required fields before applying.");
            }

            if (!isValid) {
                event.preventDefault();
                alert(errorMessages.join("\n"));
                return;
            }

            // If validation passes, proceed with submission
            event.preventDefault(); // Prevent actual form submission
            alert("Application submitted! Redirecting to main page...");
            window.location.href = "index1.html"; // Redirect to Home Page
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {
    const getStartedBtn = document.querySelector(".btn[href='#signup-section']");
    
    getStartedBtn?.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "register.html";
    });
});