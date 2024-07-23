document.addEventListener("DOMContentLoaded", (event) => {
  const addToCartButtons = document.querySelectorAll("#addToCartButton");
  const notification = document.querySelector(".notification");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      notification.style.display = "block";
      setTimeout(() => {
        notification.style.display = "none";
      }, 2000);
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const shopNowButton = document.getElementById("shopNowButton");
  const loginPopup = document.getElementById("loginPopup");
  const overlay = document.getElementById("overlay");

  function showLoginPopup() {
    loginPopup.style.display = "block";
    overlay.style.display = "block";
  }

  function hideLoginPopup() {
    loginPopup.style.display = "none";
    overlay.style.display = "none";
  }

  shopNowButton.addEventListener("click", showLoginPopup);

  overlay.addEventListener("click", hideLoginPopup);
});
