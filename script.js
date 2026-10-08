const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("portfolioTheme", isDark ? "dark" : "light");
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    projectItems.forEach(item => {
      const categories = item.dataset.category.split(" ");
      item.style.display = filter === "all" || categories.includes(filter) ? "" : "none";
    });
  });
});

const modal = new bootstrap.Modal(document.getElementById("projectModal"));
document.querySelectorAll(".details-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("projectModalLabel").textContent = button.dataset.title;
    document.getElementById("projectModalBody").textContent = button.dataset.info;
    modal.show();
  });
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", event => {
  event.preventDefault();

  if (!form.checkValidity()) {
    event.stopPropagation();
    form.classList.add("was-validated");
    formMessage.textContent = "Please correct the highlighted fields.";
    formMessage.className = "mt-3 alert alert-danger";
    return;
  }

  form.classList.remove("was-validated");
  form.reset();
  formMessage.textContent = "Thank you! Your message has been validated successfully.";
  formMessage.className = "mt-3 alert alert-success";
});

document.getElementById("year").textContent = new Date().getFullYear();
