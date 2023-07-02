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
const certificateGrid = document.querySelector("#certificate-grid");
const certificateCard = document.querySelectorAll(".certificate-card");
const containerGrid = document.querySelector("#container-grid");
const searchInputCertificate = document.querySelector(
  ".search-input-certificate"
);
const searchInputContainer = document.querySelector(".search-input-container");

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
    for (i in certificateElements) {
      document.querySelector(
        `#certificate-${certificateElements[i].index}`
      ).style.display = "block";
    }
  }
}

//Array to hold certificate elements and container elements
// certificateElements acting as call from BE
const certificateElements = [
  {
    index: 16,
    title: "Introduction to Android Programming",
    issueDate: "25-07-2021",
    issuedBy: "Google",
    description:
      "Issued by Google to certify that the holder of this certificate is capable of handling introductory Android programming",
    tags: ["Android", "Coding", "Google"],
  },
  {
    index: 12,
    title: "Programming Essentials",
    issueDate: "05-01-2020",
    issuedBy: "Udemy",
    description:
      "Issued by Udemy to certify that the holder of this certificate is capable of handling introductory programming concepts",
    tags: ["Coding", "Udemy"],
  },
  {
    index: 31,
    title: "Introduction to AWS Cloud Services",
    issueDate: "02-05-2023",
    issuedBy: "Amazon",
    description:
      "Issued by Amazon to certify that the holder of this certificate has a solid understanding of the processes involved in the functioning of AWS Cloud",
    tags: ["AWS", "Cloud", "Amazon"],
  },
  {
    index: 42,
    title: "JavaScript Essentials",
    issueDate: "25-07-2021",
    issuedBy: "Udemy",
    description:
      "Issued by Udemy to certify that the holder of this certificate is capable of handling introductory JavaScript programming",
    tags: ["Coding", "JavaScript", "Udemy"],
  },
  {
    index: 15,
    title: "Beginner's Guide to Swift",
    issueDate: "10-11-2022",
    issuedBy: "Apple",
    description:
      "Issued by Apple to certify that the holder of this certificate is capable of handling introductory Swift programming",
    tags: ["Coding", "Swift", "Apple"],
  },
];

for (i of certificateElements) {
  certificateGrid.insertAdjacentHTML(
    "beforeEnd",
    `<div id="certificate-${
      i.index
    }" class="certificate-card" style="display:block">
    <div class="badge">${i.issueDate}</div>
    <div class="certificate-image">
      <img src="images/demo.jpg" alt="" />
    </div>
    <div class="certificate-details">
      <span class="certificate-tags">${i.tags.join(" | ")}</span>
      <h4>${i.title}</h4>
      <p>
        ${i.description}
      </p>
      <div class="certificate-bottom-details">
        <h3>Issued By: </h3>
        <div class="issued-by">${i.issuedBy}</div>
      </div>
    </div>
  </div>`
  );
}

//Cerificate Search Functioning
searchInputCertificate.addEventListener("keyup", function () {
  if (searchInputCertificate.value != "") {
    for (i in certificateElements) {
      let certificateSearchElements = Object.values(certificateElements[`${i}`])
        .flat()
        .toString()
        .toLowerCase()
        .split(",");
      document.querySelector(
        `#certificate-${certificateElements[i].index}`
      ).style.display = "none";
      if (
        certificateSearchElements.some((item) =>
          item.includes(searchInputCertificate.value.toLowerCase())
        )
      ) {
        document.querySelector(
          `#certificate-${certificateElements[i].index}`
        ).style.display = "block";
      }
    }
    //Else part meant to show display of All blocks
    //But the code somehow works without the 'else' part
    //Delete if you want to save some space
  } else {
    for (i in certificateElements) {
      document.querySelector(
        `#certificate-${certificateElements[i].index}`
      ).style.display = "block";
    }
  }
});

containerElements = [
  { index: 1, title: "Udemy Certificates", count: 7, date: "12-09-2018" },
  { index: 2, title: "Google Certificates", count: 12, date: "10-11-2018" },
  { index: 3, title: "Amazon Certificates", count: 4, date: "19-01-2012" },
  { index: 4, title: "Apple Certificates", count: 12, date: "10-01-2022" },
];

for (i of containerElements) {
  containerGrid.insertAdjacentHTML(
    "beforeEnd",
    `<div id="container-${i.index}" class="container-card" style="display:block">${i.index}:${i.title}</div>`
  );
}
