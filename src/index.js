import Bottom from "./modules/bottom";
import { callPage } from "./modules/functions";
import Header from "./modules/header";
import "./style.css";
export const content = document.querySelector('#content');


Header.render();
callPage('Home');
