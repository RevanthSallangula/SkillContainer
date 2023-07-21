const btnDashboard = document.querySelector(".dashboard-btn");
const btnPricing = document.querySelector(".pricing-btn");
const btnAbout = document.querySelector(".about-btn");
const btnContact = document.querySelector(".contact-btn");
const btnLoginRegiter = document.querySelector(".login-registration-btn");
const btnLoginSignIn = document.querySelector(".login-sign-in-btn");
const loginForm = document.querySelector(".login-form");
const registrationForm = document.querySelector(".registration-form");
const contactForm = document.querySelector(".contact-form");
const btnRegistrationSignUp = document.querySelector(
    ".registration-sign-up-btn"
);

const loggedIn = false;

function closeAll() {
    loginForm.style.display = "none";
    registrationForm.style.display = "none";
    contactForm.style.display = "none";
}

closeAll();

function toggleShowLogin() {
    closeAll();
    if (loginForm.style.display === "none" && loggedIn === false) {
        loginForm.style.display = "flex";
    }
}

function toggleShowRegistration() {
    closeAll();
    if (registrationForm.style.display === "none") {
        registrationForm.style.display = "flex";
    }
}

function toggleShowContact() {
    closeAll();
    if (contactForm.style.display === "none") {
        contactForm.style.display = "flex";
    }
}

btnDashboard.addEventListener("click", function () {
    if (loggedIn === false) {
        console.log("Not Logged In");
    } else {
        console.log("Already Logged In");
        location.href = "/dashboard";
    }
});
