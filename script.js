const btnDashboard = document.querySelector(".dashboard-btn");
const btnPricing = document.querySelector(".pricing-btn");
const btnAbout = document.querySelector(".about-btn");
const btnContact = document.querySelector(".contact-btn");
const btnLoginRegiter = document.querySelector(".login-registration-btn");
const btnLoginSignIn = document.querySelector(".login-sign-in-btn");
const loggedIn = false;

btnDashboard.addEventListener("click", function () {
  if (loggedIn === false) {
    document.querySelector(".login-form").style.opacity = 1;
  } else {
    console.log("Already Logged In");
  }
});
