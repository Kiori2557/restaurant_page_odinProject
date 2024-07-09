import "./style.css";
import Interior from "./interior.jpg";
const content = document.querySelector(".content");
console.log("hi");
function addBackground() {
  const background = new Image();
  background.src = Interior;

  content.appendChild(background);
  return;
}
addBackground();
