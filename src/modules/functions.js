import { content } from "..";
import About from "./about";
import Home from "./home";
import Bottom from "./bottom";

let currentPage = '';

export function createHtmlElement(type, id, arrayClasses, content, appendCh) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses) arrayClasses.forEach(myClass => element.classList.add(myClass));
    if (content) element.innerText = content;
    if (appendCh) appendCh.appendChild(element);

    return element;
}

export function callPage(name) {
    if(name && name !== currentPage){
        while(content.children.length > 2) {
            content.children[2].remove(); //remove all except first child (header)
        };

        switch(name){
            case 'Home':
                Home.render();
                break;
            case 'About':
                About.render();
                break;
        }
        currentPage = name;
        Bottom.render();
    }
}