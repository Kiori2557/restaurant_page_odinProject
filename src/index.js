import "./style.css";
import { renderHomePage } from "./renderHome";
import { renderMenuPage } from "./renderMenu";
import { renderAboutPage } from "./renderAbout";

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");
renderHomePage();
homeBtn.addEventListener("click", renderHomePage);
menuBtn.addEventListener("click", renderMenuPage);
aboutBtn.addEventListener("click", renderAboutPage);
