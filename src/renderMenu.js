import { createCard } from "./createCard";
import imgData from "./img.json";
export function renderMenuPage() {
  const content = document.querySelector(".content");
  const breakfastParentDiv = document.createElement("div");
  const lunchParentDiv = document.createElement("div");
  const dinnerParentDiv = document.createElement("div");
  const juiceParentDiv = document.createElement("div");
  content.innerHTML = "";
  content.classList.add("menu");
  content.appendChild(breakfastParentDiv);
  breakfastParentDiv.classList.add("menuItem", "breakfast");
  content.appendChild(lunchParentDiv);
  lunchParentDiv.classList.add("menuItem", "lunch");
  content.appendChild(dinnerParentDiv);
  dinnerParentDiv.classList.add("menuItem", "dinner");
  content.appendChild(juiceParentDiv);
  juiceParentDiv.classList.add("menuItem", "juice");
  createCard(imgData);
  return;
}
