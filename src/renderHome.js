import { setActiveButton } from "./setActiveButton";
import { createDivWithClassAndContent } from "./createDiv";
import { createDivWithClass } from "./createDiv";
export function renderHomePage() {
  const activeBtn = document.querySelector(".homeBtn");
  const content = document.querySelector(".content");
  const background = createDivWithClass("home");
  const header = createDivWithClassAndContent(
    "textArea",
    "DISCOVER OUR LOCAL UNIQUE FLAVOR AT OUR RESTAURANT WHERE YOU CAN GET ALL LOCAL FOODS IN ONE PLACE"
  );
  const info = createDivWithClassAndContent(
    "info",
    "We open from 7 am to 10 pm. You can enjoy our food for every meal everyday!"
  );
  const credit = createDivWithClass("homePageCredit");
  content.innerHTML = "";
  setActiveButton(activeBtn);
  content.classList.remove("menu");
  credit.innerHTML = `Photo by <a href='https://unsplash.com/@stachmann?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Richard Stachmann</a> on <a href='https://unsplash.com/photos/a-restaurant-with-tables-chairs-and-a-television-LcPYvrzwYCY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>`;
  background.appendChild(header);
  content.appendChild(background);
  content.appendChild(credit);
  content.appendChild(info);
  return;
}
