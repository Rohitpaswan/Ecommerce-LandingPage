
const header = document.querySelector(".header");
const mobileBtn = document.querySelector(".moblie-navbar-btn");
const navbar = document.querySelector(".navbar");
const closeIcon = document.querySelector(".ri-close-line");
const menuIcon = document.querySelector(".ri-menu-line");

// Add class to header if btn is being clicked
mobileBtn.addEventListener("click", () => {
  header.classList.toggle("active");
  if (header.classList.contains("active")) {
    console.log("ok");
    closeIcon.style.display = "inline-block";
    menuIcon.style.display = "none";
  } 
  
  else {
    console.log("no");
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
});
