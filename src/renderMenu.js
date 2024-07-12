import { createCard } from "./createCard";
import imgObj from "./img.json";
export function renderMenuPage() {
  const content = document.querySelector(".content");
  const breakfastParentDiv = document.createElement("div");
  const lunchParentDiv = document.createElement("div");
  const dinnerParentDiv = document.createElement("div");
  const juiceParentDiv = document.createElement("div");
  const juiceLabel = document.createElement("div");
  const breakfastLabel = document.createElement("div");
  const lunchLabel = document.createElement("div");
  const dinnerLabel = document.createElement("div");
  content.innerHTML = "";
  content.classList.add("menu");

  juiceLabel.textContent = `Juice Menu`;
  breakfastLabel.textContent = `Breakfast Menu 7am~10am`;
  lunchLabel.textContent = `Lunch Menu 10am~4pm`;
  dinnerLabel.textContent = `Dinner Menu 4pm~10pm`;

  content.appendChild(breakfastParentDiv);
  breakfastParentDiv.classList.add("menuItem", "breakfast");
  breakfastLabel.classList.add("breakfastLabel", "label");
  breakfastParentDiv.appendChild(breakfastLabel);

  content.appendChild(lunchParentDiv);
  lunchParentDiv.classList.add("menuItem", "lunch");
  lunchLabel.classList.add("lunchLabel", "label");
  lunchParentDiv.appendChild(lunchLabel);

  content.appendChild(dinnerParentDiv);
  dinnerParentDiv.classList.add("menuItem", "dinner");
  dinnerLabel.classList.add("dinnerLabel", "label");
  dinnerParentDiv.appendChild(dinnerLabel);

  content.appendChild(juiceParentDiv);
  juiceParentDiv.classList.add("menuItem", "juice");
  juiceLabel.classList.add("juiceLabel", "label");
  juiceParentDiv.appendChild(juiceLabel);

  createCard(imgObj);
  return;
}
