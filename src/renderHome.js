export function renderHomePage() {
  const content = document.querySelector(".content");
  const background = document.createElement("div");
  const header = document.createElement("div");
  const info = document.createElement("div");
  const credit = document.createElement("div");
  content.innerHTML = "";
  content.classList.remove("menu");
  background.classList.add("home");
  header.classList.add("textArea");
  header.textContent =
    "DISCOVER OUR LOCAL UNIQUE FLAVOR AT OUR RESTAURANT WHERE YOU CAN GET ALL LOCAL FOODS IN ONE PLACE";
  credit.classList.add("homePageCredit");
  credit.innerHTML = `Photo by <a href='https://unsplash.com/@stachmann?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Richard Stachmann</a> on <a href='https://unsplash.com/photos/a-restaurant-with-tables-chairs-and-a-television-LcPYvrzwYCY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>`;
  info.textContent =
    "We open from 7 am to 10 pm. You can enjoy our food for every meal everyday!";
  info.classList.add("info");
  content.appendChild(background);
  content.appendChild(credit);
  content.appendChild(info);
  background.appendChild(header);
  return;
}
