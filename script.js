const btnDashboard = document.querySelector(".dashboard-btn");
const btnPricing = document.querySelector(".pricing-btn");
const btnAbout = document.querySelector(".about-btn");
const btnContact = document.querySelector(".contact-btn");
const btnLoginRegiter = document.querySelector(".login-registration-btn");
const btnLoginSignIn = document.querySelector(".login-sign-in-btn");
const loginForm = document.querySelector(".login-form");
const registrationForm = document.querySelector(".registration-form");
const btnRegistrationSignUp = document.querySelector(
  ".registration-sign-up-btn"
);
const loggedIn = false;

function closeAll() {
  loginForm.style.display = "none";
  registrationForm.style.display = "none";
}

closeAll();

function toggleShowLogin() {
  closeAll();
  if (loginForm.style.display === "none") {
    loginForm.style.display = "flex";
  }
}

function toggleShowRegistration() {
  closeAll();
  if (registrationForm.style.display === "none") {
    registrationForm.style.display = "flex";
  }
}
btnDashboard.addEventListener("click", function () {
  if (loggedIn === false) {
    console.log("Not Logged In");
  } else {
    console.log("Already Logged In");
  }
});
btnPricing.addEventListener("click", function () {
  closeAll();
});
btnAbout.addEventListener("click", function () {
  closeAll();
});
btnContact.addEventListener("click", function () {
  closeAll();
});
