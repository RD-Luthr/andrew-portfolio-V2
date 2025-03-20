// Initialize Feather icons
document.addEventListener("DOMContentLoaded", () => {
  // Initialize icons
  feather.replace()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Handle scroll for active navigation
  const sections = ["home", "about", "project", "contact"]
  const navLinks = document.querySelectorAll(".nav-link")

  function setActiveSection() {
    const scrollPosition = window.scrollY + 100

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        const offsetTop = section.offsetTop
        const offsetHeight = section.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          // Remove active class from all links
          navLinks.forEach((link) => {
            link.classList.remove("active")
          })

          // Add active class to current section link
          const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`)
          if (activeLink) {
            activeLink.classList.add("active")
          }
        }
      }
    })
  }

  // Set active section on scroll
  window.addEventListener("scroll", setActiveSection)

  // Set active section on page load
  setActiveSection()

  // Handle form submission
  const contactForm = document.querySelector("form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const messageInput = document.getElementById("message")

      // Simple validation
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Please fill out all fields")
        return
      }

      // Open Gmail compose window with pre-filled email
      const email = "randluthringer@gmail.com";
      const subject = encodeURIComponent("Contact from Portfolio");
      const body = encodeURIComponent(`Hello Andrew,\n\n`);
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, "_blank");

      // Reset form
      contactForm.reset()
    })
  }
})



// Add this to your existing script.js file
document.addEventListener("DOMContentLoaded", () => {
  // Initialize feather icons
  feather.replace()

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Typing effect for hero text
  const heroTextElement = document.querySelector(".hero-section-text")
  if (heroTextElement) {
    const text = "Shaping innovation at the intersection of data science, AI, business analytics, and web development."
    let index = 0

    // Clear the text content first
    heroTextElement.textContent = ""

    // Create cursor element
    const cursor = document.createElement("span")
    cursor.className = "typing-cursor"
    heroTextElement.appendChild(cursor)

    function typeText() {
      if (index < text.length) {
        // Insert text before the cursor
        heroTextElement.insertBefore(document.createTextNode(text.charAt(index)), cursor)
        index++
        setTimeout(typeText, 50) // Adjust typing speed here
      } else {
        // Make cursor blink when typing is complete
        cursor.classList.add("blink")
      }
    }

    // Start typing after a short delay
    setTimeout(typeText, 500)
  }

  // Your existing JavaScript code...
})

// Import feather icons (if using a module bundler) or include the script in your HTML
// For example:
// <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>

// Alternatively, declare the feather variable if it's already available globally:
// const feather = window.feather;

