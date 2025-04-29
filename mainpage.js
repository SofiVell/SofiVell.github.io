function showReviewForm() {
  document.getElementById('reviewForm').style.display = 'block';
}

document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('reviewName').value;
  const text = document.getElementById('reviewText').value;

  if (name && text) {
    const reviewSection = document.querySelector('.reviews');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `"${text}"<strong>${name}</strong>`;
    reviewSection.insertBefore(newReview, this);
    this.reset();
    this.style.display = 'none';
  }
});

const adminPassword = "admin123";
const aboutText = document.getElementById("aboutText");
const editArea = document.getElementById("editAboutText");
const saveBtn = document.getElementById("saveAboutBtn");

const savedText = localStorage.getItem("aboutContent_uk");
if (savedText) {
  aboutText.textContent = savedText;
}

function loginAdmin() {
  const input = document.getElementById("adminPass").value;
  if (input === adminPassword) {
    editArea.value = aboutText.textContent;
    aboutText.style.display = "none";
    editArea.style.display = "block";
    saveBtn.style.display = "inline-block";
    alert("Вхід успішний. Ви можете редагувати текст.");
  } else {
    alert("Невірний пароль.");
  }
}

function toggleAdminLogin() {
  const form = document.getElementById("adminLogin");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

saveBtn.addEventListener("click", () => {
  const newText = editArea.value;
  aboutText.textContent = newText;
  localStorage.setItem("aboutContent_uk", newText);
  editArea.style.display = "none";
  saveBtn.style.display = "none";
  aboutText.style.display = "block";
});
