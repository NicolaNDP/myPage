import { content } from "..";
import About from "./about";
import Home from "./home";

let currentPage = '';

export function createHtmlElement(type, id, arrayClasses, inType, content, appendCh) {
    const element = document.createElement(type);
    if (id) element.id = id;
    if (arrayClasses) arrayClasses.forEach(myClass => element.classList.add(myClass));
    if (inType) element.type = inType;
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
            case 'Page1':
                Home.render();
                break;
            case 'Page2':
                About.render();
                break;
        }
        currentPage = name;
    }
}

export function clearAll() {

}