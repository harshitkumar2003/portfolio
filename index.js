//! ------------------ javascript for nav-container change color on scroll --------------------
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".nav-container");
  if (!navbar) return; // Safety check

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//! ------------------ javascript for ToggleMenu show when small screen --------------------
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
}

//! ------------------ javascript for submitting form --------------------
  function sendEmail(e) {
    e.preventDefault(); // stop page refresh

    let isSuccess = Math.random() > 0.5;

    if (isSuccess) {
      alert("✅ Thank you! Your message has been sent.");
    } else {
      alert("❌ Failed to send message. Please try again later.");
    }

    // reset form after submit
    document.querySelector(".contact-form").reset();
  }
