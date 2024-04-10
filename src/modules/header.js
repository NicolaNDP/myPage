import { content } from "../index.js"
import { createHtmlElement } from "./functions";
import { callPage } from "./functions";
import icon_menu from "../assets/icon_menu.svg"
import icon_logo from "../assets/icon_logo.svg"

export default class Header {
    static render () {
        const div = createHtmlElement('div', 'header-div', null, null, null, content);
        const icnLogo = createHtmlElement('img', 'icon-logo', null, null, null, div);
            icnLogo.src = icon_logo;
        const icnMenu = createHtmlElement('img', 'icon-menu', null, null, null, div);
            icnMenu.src = icon_menu;
        const listMenu = createHtmlElement('ul', 'header-ul', null, null, null, content);
            listMenu.style.display = 'none';
        const listMenuContent = ['Page1','Page2','Page3','Page4','Page5'];
            listMenuContent.forEach((page) => {
                const el = createHtmlElement('li', null, [`${page}`], null, `${page}`, listMenu);
                el.addEventListener('click', () => {
                    callPage(el.classList[0]);
                    listMenu.style.display = 'none';
                    });
                });

        icnMenu.addEventListener('click', () => {
            if(listMenu.style.display === 'none') {listMenu.style.display ='block'} else {listMenu.style.display = 'none'};
        });
    }
}