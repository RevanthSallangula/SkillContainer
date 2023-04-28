const sidebar = document.querySelector(".sidebar");
const navTitle = document.querySelector(".nav-title");
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
const certificateGrid=document.querySelector("#certificate-grid")
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
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange();
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
  if (sidebar.classList.contains("open")) {
    sidebar.classList.toggle("open");
    menuBtnChange();
  }
  document.querySelector(`.home-${name}`).style.display = "flex";
  navTitle.textContent = name[0].toUpperCase() + name.slice(1);
}

//Logs Out to index.html
function logOut() {
  location.href = "/index.html";
}

//Search Bar
function searchToggle(obj, evt) {
  var container = $(obj).closest(".search-wrapper");
  if (!container.hasClass("active")) {
    container.addClass("active");
    evt.preventDefault();
  } else if (
    container.hasClass("active") &&
    $(obj).closest(".input-holder").length == 0
  ) {
    container.removeClass("active");
    // clear input
    container.find(".search-input").val("");
  }
}

//Array to hold certificate elements
certificateElements = [12,37,3478,238,11];
for (i of certificateElements){
  certificateGrid.insertAdjacentHTML("afterBegin",`<div class=\'item item-${i}\'>${i}</div>`)
}
