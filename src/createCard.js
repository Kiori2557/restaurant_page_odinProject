export function createCard(img) {
  img.forEach((item) => {
    let parent;
    let itemDiv = document.createElement("div");
    let dishLabel = document.createElement("div");
    let credit = document.createElement("div");
    if (item.category === "breakfast") {
      parent = document.querySelector(".breakfast");
    } else if (item.category === "lunch") {
      parent = document.querySelector(".lunch");
    } else if (item.category === "dinner") {
      parent = document.querySelector(".dinner");
    } else if (item.category === "juice") {
      parent = document.querySelector(".juice");
    }
    credit.innerHTML = item.credit;
    credit.classList.add("credit");
    dishLabel.textContent = item.name;
    dishLabel.classList.add("dishLabel");
    itemDiv.appendChild(dishLabel);
    itemDiv.appendChild(credit);
    itemDiv.style.background = `center/ cover no-repeat url("${item.path}")`;
    itemDiv.classList.add("menuCard");
    parent.appendChild(itemDiv);
  });
}
