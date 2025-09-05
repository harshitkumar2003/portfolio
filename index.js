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
 function sendEmail(event) {
    alert("⏳ Sending your message...");
  }



   const form = document.getElementById("contact-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // stop page reload

    // show first alert
    alert("⏳ Sending your message...");

    try {
      let response = await fetch("https://formspree.io/f/mqadgvgd", {
        method: "POST",
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("✅ Thank you! Your message has been sent.");
        form.reset(); // clear form
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("⚠️ Network error. Please check your connection.");
      console.error("Formspree Error:", error);
    }
  });