import { content } from "../index.js"
import { createHtmlElement } from "./functions";
import icon_fb from "../assets/icon_fb.svg"
import icon_igrm from "../assets/icon_igrm.svg"

export default class Bottom {
    static render(){
        const div = createHtmlElement('div', 'bottom-div', null, null, content);
        const icnText = createHtmlElement('p', 'bottom-text', null, 'Your Company ® 2024', div);

        const icnDiv = createHtmlElement('div', 'bottom-icon-div', null, null, div);
        const icnFb = createHtmlElement('img', 'bottom-icon-fb', ['icon'], null, icnDiv);
            icnFb.src = icon_fb;
        const icnIgrm = createHtmlElement('img', 'bottom-icon-igrm', ['icon'], null, icnDiv);
            icnIgrm.src = icon_igrm;
    }
}