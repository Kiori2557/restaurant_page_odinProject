import { setActiveButton } from "./setActiveButton";
import { createDivWithClassAndContent } from "./createDiv";
import { createDivWithClass } from "./createDiv";
export function renderAboutPage() {
  const activeBtn = document.querySelector(".aboutBtn");
  const content = document.querySelector(".content");
  const background = createDivWithClass("aboutUs");
  const textArea = createDivWithClassAndContent(
    "textArea",
    "About Our Restaurant"
  );
  const aboutUsBody = createDivWithClassAndContent(
    "aboutUsBody",
    `Electron Restaurant, owned by Hydrogen Limited, was
  founded in November of 2020 by HuD, a passionate fan of foods and restaurant. Supported by
  talented chefs, managers and staffs, it quickly rose to prominence in the local area.`
  );
  content.innerHTML = "";
  setActiveButton(activeBtn);
  content.classList.remove("menu");
  content.appendChild(background);
  background.appendChild(textArea);
  background.appendChild(aboutUsBody);
  return;
}
