export function renderAboutPage() {
  const content = document.querySelector(".content");
  const background = document.createElement("div");
  const textArea = document.createElement("div");
  content.innerHTML = "";
  background.classList.add("home");
  textArea.classList.add("textArea");
  textArea.textContent = "About";
  content.appendChild(background);
  background.appendChild(textArea);
  return;
}
