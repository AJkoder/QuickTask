function sendOTP() {
    let phoneNumber = document.getElementById("phoneNumber").value;
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");

    auth.signInWithPhoneNumber(phoneNumber, recaptcha)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            alert("OTP Sent!");
        })
        .catch((error) => {
            console.error("Error sending OTP:", error);
        });
}

function verifyOTP() {
    let otpCode = document.getElementById("otpCode").value;

    window.confirmationResult.confirm(otpCode)
        .then((result) => {
            alert("Login Successful!");
            console.log("User:", result.user);
        })
        .catch((error) => {
            console.error("OTP verification failed:", error);
        });
}
