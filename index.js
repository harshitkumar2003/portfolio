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

//! ------------------ javascript for nav-container change color on scroll --------------------
    function submitForm(my) {
        e.preventDefault(); // Prevent real form submission

        // Optionally collect data
        const name = my.target.name.value;
        
        // Show confirmation
        alert(`Thank you, ${name || 'there'}! Your message has been sent.`);
        
        // Reset the form
        my.target.reset();
    }

