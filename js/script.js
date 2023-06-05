// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
 header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
 navbar.classList.toggle("active");
};
window.onscroll = () => {
 navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
 if (darkmode.classList.contains("bx-moon")) {
  darkmode.classList.replace("bx-moon", "bx-sun");
  document.body.classList.add("active");
 } else {
  darkmode.classList.replace("bx-sun", "bx-moon");
  document.body.classList.remove("active");
 }
};

// Slider
var swiper = new Swiper(".slide-content", {
 slidesPerView: 3,
 spaceBetween: 25,
 loop: false,
 centerSlide: "true",
 fade: "true",
 grabCursor: "true",
 pagination: {
  el: ".swiper-pagination",
  clickable: true,
  dynamicBullets: true,
 },
 navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
 },

 breakpoints: {
  0: {
   slidesPerView: 1,
  },
  520: {
   slidesPerView: 2,
  },
  // 950: {
  //  slidesPerView: 3,
  // },
 },
});

// Filtering Portfolio
// Add an event listener to each filter button
var filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(function (button) {
 button.addEventListener("click", function () {
  // Remove the 'active' class from all buttons
  filterButtons.forEach(function (btn) {
   btn.classList.remove("active");
  });
  // Add the 'active' class to the clicked button
  button.classList.add("active");

  // Get the filter value from the clicked button
  var filterValue = button.getAttribute("data-filter");

  // Show/hide gallery items based on the filter value
  var galleryItems = document.querySelectorAll(".gallery .item");
  galleryItems.forEach(function (item) {
   if (filterValue === "all" || item.classList.contains(filterValue)) {
    item.style.display = "block";
   } else {
    item.style.display = "none";
   }
  });
 });
});

// Contact
function sendEmail() {
 var params = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  message: document.getElementById("message").value,
 };

 const serviceID = "service_7vtce3y";
 const templateID = "template_9jstit8";

 emailjs
  .send(serviceID, templateID, params)
  .then((res) => {
   document.getElementById("name").value = "";
   document.getElementById("email").value = "";
   document.getElementById("message").value = "";
   console.log(res);
   alert("Your message sent successfully!!");
  })
  .catch((err) => console.log(err));
}
