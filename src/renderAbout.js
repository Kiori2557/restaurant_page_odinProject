import { setActiveButton } from "./setActiveButton";
export function renderAboutPage() {
  const activeBtn = document.querySelector(".aboutBtn");
  const content = document.querySelector(".content");
  const background = document.createElement("div");
  const textArea = document.createElement("div");
  const aboutUsBody = document.createElement("div");
  content.innerHTML = "";
  setActiveButton(activeBtn);
  content.classList.remove("menu");
  background.classList.add("aboutUs");
  textArea.classList.add("textArea");
  aboutUsBody.classList.add("aboutUsBody");
  textArea.textContent = "About Our Restaurant";
  aboutUsBody.textContent = `Electron Restaurant, owned by Hydrogen Limited, was
  founded in November of 2020 by HuD, a passionate fan of foods and restaurant. Supported by
  talented chefs, managers and staffs, it quickly rose to prominence in the local area.`;
  content.appendChild(background);
  background.appendChild(textArea);
  background.appendChild(aboutUsBody);
  return;
}
