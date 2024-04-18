import { content } from "../index.js"
import { createHtmlElement } from "./functions";
import { callPage } from "./functions";
import icon_menu from "../assets/icon_menu.svg"
import icon_logo from "../assets/icon_logo.svg"
import icon_esc from "../assets/icon_esc.svg"
import icon_fb from "../assets/icon_fb.svg"
import icon_igrm from "../assets/icon_igrm.svg"

export default class Header {
    static render () {
        const div = createHtmlElement('div', 'header-div', null, null, content);

        const icnLogo = createHtmlElement('img', 'icon-logo', ['icon'], null, div);
            icnLogo.src = icon_logo;
        
        const icnText = createHtmlElement('text', 'icon-text', ['icontext'], 'Your Company', div);
        
        const icnMenu = createHtmlElement('img', 'icon-menu', ['icon'], null, div);
            icnMenu.src = icon_menu;

        //Menu
        const divMenu = createHtmlElement('div', 'menu-div', null, null, content);


        const icnEsc = createHtmlElement('img', 'icon-esc', ['icon'], null, divMenu);
            icnEsc.src = icon_esc;

        const listMenu = createHtmlElement('ul', 'menu-ul', null, null, divMenu);

        const listMenuContent = ['Home','About','Contact'];
            listMenuContent.forEach((page) => {
                const el = createHtmlElement('li', null, [`${page}`, 'hover'], `${page}`, listMenu);
                el.addEventListener('click', () => {
                    callPage(el.classList[0]);
                    divMenu.style.width = '';
                    //document.body.style.backgroundColor = "white";
                    });
                });

        const icnFb = createHtmlElement('img', 'icon-fb', ['icon'], null, divMenu);
            icnFb.src = icon_fb;
        const icnIgrm = createHtmlElement('img', 'icon-igrm', ['icon'], null, divMenu);
            icnIgrm.src = icon_igrm;
            
        icnEsc.addEventListener('click', () => {
            divMenu.style.width = '';
            //document.body.style.backgroundColor = "white";
        });

        icnMenu.addEventListener('click', () => {
            if(divMenu.style.width === '') {
                divMenu.style.width ='40%'
                //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            } else {
                div.style.width = '';
                //document.body.style.backgroundColor = "white";
            };
        });
    }
}