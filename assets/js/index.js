///////////  When i click on the nav bar link it move smothly //

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link-js");

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

//////////  For Google Sheet Contact  /////////////

const scriptURL =
  "https://script.google.com/macros/s/AKfycby26580s2EXoV_Ox2Fzp6G4PX1CZAmkQOomYFxRDdm2Y8iAkKDcQ0Bav5C8x8BtBnZi/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

///////  FAQ /////////

function toggleAnswer(id) {
  const answerElement = document.getElementById(`answer${id}`);
  answerElement.classList.toggle("show");
}
