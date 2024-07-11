export function renderHomePage() {
  const content = document.querySelector(".content");
  const background = document.createElement("div");
  const textArea = document.createElement("div");
  content.innerHTML = "";
  background.classList.add("home");
  textArea.classList.add("textArea");
  textArea.textContent =
    "DISCOVER OUR LOCAL UNIQUE FLAVOR AT OUR RESTAURANT WHERE YOU CAN GET ALL LOCAL FOODS IN ONE PLACE";
  content.appendChild(background);
  background.appendChild(textArea);
  return;
}
