import { content } from "../index";
import { createHtmlElement } from "./functions";

export default class Home {
    static render() {
        const div = createHtmlElement('div', 'home-div', null, null, null, content);
        const text = createHtmlElement('h1', 'home-h1', null, null, 'This is the home page.', div);
    }
}