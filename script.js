const btnDashboard = document.querySelector(".dashboard-btn");
const btnPricing = document.querySelector(".pricing-btn");
const btnAbout = document.querySelector(".about-btn");
const btnContact = document.querySelector(".contact-btn");
const btnLoginRegiter = document.querySelector(".login-registration-btn");
const btnLoginSignIn = document.querySelector(".login-sign-in-btn");
const loginForm = document.querySelector(".login-form");
const loggedIn = false;

function closeLogin() {
  loginForm.style.display = "none";
}

closeLogin();

function toggleShow() {
  if (loginForm.style.display === "none") {
    loginForm.style.display = "flex";
  } else {
    closeLogin();
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
  closeLogin();
});
btnAbout.addEventListener("click", function () {
  closeLogin();
});
btnContact.addEventListener("click", function () {
  closeLogin();
});
