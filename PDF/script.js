const modal = document.getElementById("modal");

document
  .getElementById("open-modal-btn")
  .addEventListener("click", () => (modal.style.display = "block"));
document
  .getElementById("close-modal-btn")
  .addEventListener("click", () => (modal.style.display = "none"));
