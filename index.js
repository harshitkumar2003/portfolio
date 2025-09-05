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

//! ------------------ javascript for alert when submitting form --------------------
    function submitForm(e) {
        e.preventDefault(); // Prevent real form submission

        // Optionally collect data
        const name = e.target.name.value;
        
        // Show confirmation
        alert(`Thank you, ${name || 'there'}! Your message has been sent.`);
        
        // Reset the form
        e.target.reset();
    }

    function sendEmail(){
      Email.send({
            SecureToken: "f8757ea1-9acf-4e8a-a37d-a44a1ba734c8",
            To: 'harshitkumar2k03@gmail.com',
            From: document.getElementById("email").value,
            Subject: "Someone contact from Portfolio",
            Body:
                "Name: " + document.getElementById("name").value
                + " <br> Email: " + document.getElementById("email").value
                + " <br> Message: " + document.getElementById("message").value,
        });
      }