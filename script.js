/* =====================================================
   EXCEL HERITAGE WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu when a link is clicked */

const navigationLinks =
    document.querySelectorAll(".nav-menu a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   HEADER EFFECT
===================================================== */

window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.07)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for contacting Excel Heritage. " +
        "Your message has been received."
    );

    contactForm.reset();

});