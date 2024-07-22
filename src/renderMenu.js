import { createCard } from "./createCard";
import { setActiveButton } from "./setActiveButton";
import { createDivWithClassAndContent } from "./createDiv";
import { createDivWithClass } from "./createDiv";
import imgObj from "./img.json";
export function renderMenuPage() {
  const activeBtn = document.querySelector(".menuBtn");
  const content = document.querySelector(".content");
  const breakfastParentDiv = createDivWithClass("menuItem", "breakfast");
  const lunchParentDiv = createDivWithClass("menuItem", "lunch");
  const dinnerParentDiv = createDivWithClass("menuItem", "dinner");
  const juiceParentDiv = createDivWithClass("menuItem", "juice");
  const juiceLabel = createDivWithClassAndContent("label", `Juice Menu`);
  const breakfastLabel = createDivWithClassAndContent(
    "label",
    `Breakfast Menu 7am~10am`
  );
  const lunchLabel = createDivWithClassAndContent(
    "label",
    `Lunch Menu 10am~4pm`
  );
  const dinnerLabel = createDivWithClassAndContent(
    "label",
    `Dinner Menu 4pm~10pm`
  );

  content.innerHTML = "";
  setActiveButton(activeBtn);
  content.classList.add("menu");

  content.appendChild(breakfastParentDiv);
  breakfastParentDiv.appendChild(breakfastLabel);

  content.appendChild(lunchParentDiv);
  lunchParentDiv.appendChild(lunchLabel);

  content.appendChild(dinnerParentDiv);
  dinnerParentDiv.appendChild(dinnerLabel);

  content.appendChild(juiceParentDiv);
  juiceParentDiv.appendChild(juiceLabel);

  createCard(imgObj);
  return;
}
