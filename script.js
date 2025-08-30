// Part 1: Event Handling
document.getElementById("clickBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "Button was clicked!";
});

// Part 2: Interactive Elements
// Light/Dark Mode
document.getElementById("toggleMode").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
document.getElementById("increase").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});
document.getElementById("decrease").addEventListener("click", function() {
  count--;
  document.getElementById("count").textContent = count;
});

// Part 3: Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form from submitting
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let msg = "";

  if (name === "") {
    msg = "Name is required!";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg = "Enter a valid email!";
  } else if (password.length < 6) {
    msg = "Password must be at least 6 characters.";
  } else {
    msg = " Form submitted successfully!";
  }

  document.getElementById("formMsg").textContent = msg;
});
