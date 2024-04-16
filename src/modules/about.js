import { content } from "../index";
import { createHtmlElement } from "./functions";
import hero_img from "../img/hero.jpg"

export default class About {
    static render() {
        const div = createHtmlElement('div', 'about-div', null, null, content);

        //SUBTS SECTION
        const subtsDiv = createHtmlElement('div', 'about-subts-div', null, null, div);
        const subtsImg = createHtmlElement('img', 'about-subts-img', null, null, subtsDiv);
            subtsImg.src = hero_img;
        const subtsText = createHtmlElement('div', 'about-subts-text', null, null, subtsDiv);
            const subtsH2 = createHtmlElement('h2', 'about-subts-h2', null, 'Discover our services!', subtsText);
            const subtsP = createHtmlElement('p', 'about-subts-p', null, 'Et harum quidem rerum facilis est et expedita distinctio.', subtsText);
            const subtsBtn = createHtmlElement('button', 'about-subts-btn', null, 'Take me home!', subtsText);

        //2 COL text-img SECTION
        const tiDiv = createHtmlElement('div', 'about-ti-div', ['section-div-two'], null, div);
    
        const tiText = createHtmlElement('div', 'about-titext-div', null, null, tiDiv);
            const tiH2 = createHtmlElement('h2', 'about-ti-h2', null, 'A two column img-text', tiText);
            const tiP = createHtmlElement('p', 'about-ti-p', null, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit', tiText);
            
        const tiImg = createHtmlElement('img', 'about-ti-img', null, null, tiDiv);
            tiImg.src = hero_img;

        //2 COL img-text SECTION
        const itDiv = createHtmlElement('div', 'about-it-div', ['section-div-two'], null, div);
    
            const itImg = createHtmlElement('img', 'about-it-img', null, null, itDiv);
                itImg.src = hero_img;
            const itText = createHtmlElement('div', 'about-ittext-div', null, null, itDiv);
                const itH2 = createHtmlElement('h2', 'about-it-h2', null, 'A two column img-text', itText);
                const itP = createHtmlElement('p', 'about-it-p', null, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit', itText);

        //CALL TO ACTION SECTION
        const ctaDiv = createHtmlElement('div', 'about-cta-div', null, null, div);
            const ctaImg = createHtmlElement('img', 'about-cta-img', null, null, ctaDiv);
                ctaImg.src = hero_img;
            const ctaText = createHtmlElement('div', 'about-cta-text', null, null, ctaDiv);
                const ctaH2 = createHtmlElement('h2', 'about-cta-h2', null, 'A Call to Action!', ctaText);
                const ctaP = createHtmlElement('p', 'about-cta-p', null, 'Et harum quidem rerum facilis est et expedita distinctio.', ctaText);
                const ctaBtn = createHtmlElement('button', 'about-cta-btn', null, 'Reserve', ctaText);
    }
}