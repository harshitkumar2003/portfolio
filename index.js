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
   function sendEmail() {
    let userEmail = document.getElementById("email").value;
    let userName = document.getElementById("name").value;
    let userMessage = document.getElementById("message").value;

    emailjs.send("service_c763aql", "template_mshj0io", {
      from_email: userEmail,
      from_name: userName,
      message: userMessage
    })
    .then(
      function(response) {
        alert(`Thank you, ${userName}! Your message has been sent ✅`);
      },
      function(error) {
        alert("❌ Failed to send message. Please try again later.");
        console.error("EmailJS Error:", error);
      }
    );
}

