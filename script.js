// CHANGE THIS PASSWORD before publishing.
// IMPORTANT: this is a simple browser-side password gate, not strong security.
// Anyone with technical access to the page source could bypass it.
const PASSWORD = "ASN2026";

const login = document.getElementById("login");
const cardArea = document.getElementById("cardArea");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const error = document.getElementById("error");
const card = document.getElementById("flipCard");

function unlock() {
  if (passwordInput.value === PASSWORD) {
    login.classList.add("hidden");
    cardArea.classList.remove("hidden");
    error.textContent = "";
  } else {
    error.textContent = "Incorrect password.";
    passwordInput.select();
  }
}

loginBtn.addEventListener("click", unlock);
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") unlock();
});

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

card.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    card.classList.toggle("flipped");
  }
});
