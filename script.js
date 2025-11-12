const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
  themeToggle.textContent = body.classList.contains("light-mode") ? "🌙" : "☀️";
});
