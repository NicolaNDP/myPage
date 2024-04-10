import { content } from "../index";
import { createHtmlElement } from "./functions";

export default class About {
    static render() {
        const div = createHtmlElement('div', 'about-div', null, null, null, content);
        const text = createHtmlElement('h1', 'about-h1', null, null, 'And this the about section.', div);
    }
}