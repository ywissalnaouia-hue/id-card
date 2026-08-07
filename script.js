// =====================================================
// ADD MEMBERS HERE
// =====================================================
// The image names must be:
// cards/member001-front.png
// cards/member001-back.png
//
// Example:
// member002: "ASN002",
// member003: "ASN003",

const MEMBERS = {
  member001: "ASN2026",
  member002: "ASN002",
};

const params = new URLSearchParams(window.location.search);
const member = (params.get("member") || "member001").trim();

const login = document.getElementById("login");
const cardArea = document.getElementById("cardArea");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const error = document.getElementById("error");
const card = document.getElementById("flipCard");

if (!MEMBERS[member]) {
  document.querySelector(".login-box").innerHTML =
    "<h2>Card not found</h2><p>Please check your membership link.</p>";
} else {
  document.getElementById("frontImage").src =
    `cards/${encodeURIComponent(member)}-front.png`;

  document.getElementById("backImage").src =
    `cards/${encodeURIComponent(member)}-back.png`;

  function unlock() {
    if (passwordInput.value === MEMBERS[member]) {
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
}
