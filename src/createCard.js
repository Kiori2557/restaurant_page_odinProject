export function createCard(img) {
  img.forEach((item) => {
    let parent;
    let itemDiv = document.createElement("div");
    if (item.category === "breakfast") {
      parent = document.querySelector(".breakfast");
    } else if (item.category === "lunch") {
      parent = document.querySelector(".lunch");
    } else if (item.category === "dinner") {
      parent = document.querySelector(".dinner");
    } else if (item.category === "juice") {
      parent = document.querySelector(".juice");
    }
    itemDiv.style.background = `center/ cover no-repeat url("${item.path}")`;
    parent.appendChild(itemDiv);
  });
}
