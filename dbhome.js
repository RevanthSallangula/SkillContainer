const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector("#btn");
const searchBtn = document.querySelector(".bx-search");
const displaySection = document.querySelector(".home-section");
const displayDashboard = document.querySelector(".home-dashboard");
const displayUser = document.querySelector(".home-user");
const displayCertificates = document.querySelector(".home-certificates");
const displayContainers = document.querySelector(".home-containers");
const displaySettings = document.querySelector(".home-settings");
const btnDashboard = document.querySelector(".navlist-btn-dashboard");
const btnUser = document.querySelector(".navlist-btn-user");
const btnCertificates = document.querySelector(".navlist-btn-certificates");
const btnContainers = document.querySelector(".navlist-btn-containers");
const btnSettings = document.querySelector(".navlist-btn-settings");

//changing menu buttons
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

//close all active tabs
function closeAllTabs() {
  displayCertificates.style.display = "none";
  displayContainers.style.display = "none";
  displayDashboard.style.display = "none";
  displaySettings.style.display = "none";
  displayUser.style.display = "none";
}

//displays current tab
function displayCurrentTab(name) {
  closeAllTabs();
  document.querySelector(`.home-${name}`).style.display = "flex";
}
