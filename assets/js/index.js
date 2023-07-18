///////////  When i click on the nav bar link it move smothly //

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

/////  When i click on the Service, Contact btn it move smoothly     ///////////////////

const serviceButtons = document.querySelectorAll(".serviceButton");
const servicesSection = document.getElementById("services");

serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    servicesSection.scrollIntoView({ behavior: "smooth" });
  });
});

const contactButtons = document.querySelectorAll(".contactButton");
const contactSection = document.getElementById("contacts");

contactButtons.forEach((button) => {
  button.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

//////////   for Scrolling  //////////

// Function to check if the button should be shown
function checkScroll() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
}

// Function to smoothly scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Event listener for scroll event
window.addEventListener("scroll", checkScroll);
