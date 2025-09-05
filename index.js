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
    function sendEmail(){
      Email.send({
            Host : "smtp.gmail.com",
            Username : "greatworriorkarna@gmail.com",
            Password : "cwew rogt xzhc faea",
            To : 'harshitkumar2k03@gmail.com',
            From : document.getElementById("email").value,
            Subject : "Someone contacting you from Portfolio",
            Body : "Name: " + document.getElementById("name").value
                + " <br> Email: " + document.getElementById("email").value
                + " <br> Message: " + document.getElementById("message").value,
        }).then(
          message => alert(`Thank you, ${name || 'there'}! Your message has been sent.`)
        );
      }