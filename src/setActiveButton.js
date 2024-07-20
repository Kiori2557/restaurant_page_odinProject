export function setActiveButton(activeBtn) {
  const allBtns = document.querySelectorAll("nav>button");
  allBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}
