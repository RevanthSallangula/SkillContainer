const btnDashboard = document.querySelector(".dashboard-btn");
const btnPricing = document.querySelector(".pricing-btn");
const btnAbout = document.querySelector(".about-btn");
const btnContact = document.querySelector(".contact-btn");
const btnLoginRegiter = document.querySelector(".login-registration-btn");
const btnLoginSignIn = document.querySelector(".login-sign-in-btn");
const loginForm = document.querySelector(".login-form");
loginForm.style.display = "none";
const loggedIn = false;

btnDashboard.addEventListener("click", function () {
  if (loggedIn === false) {
    console.log("Not Logged In");
  } else {
    console.log("Already Logged In");
  }
});

function toggleShow() {
  if (loginForm.style.display === "none") {
    loginForm.style.display = "flex";
  } else {
    loginForm.style.display = "none";
  }
}
