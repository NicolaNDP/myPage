import { content } from "../index";
import { createHtmlElement } from "./functions";
import hero_img from "../img/hero.jpg"

export default class Home {
    static render() {
        const div = createHtmlElement('div', 'home-div', null, null, content);

        //HERO SECTION
        const heroDiv = createHtmlElement('div', 'hero-div', null, null, div);

            const heroImg = createHtmlElement('img', 'hero-img', null, null, heroDiv);
                heroImg.src = hero_img;

            const heroText = createHtmlElement('div', 'herotext-div', null, null, heroDiv);
                const heroH1 = createHtmlElement('h1', 'hero-h1', ['hero-text'], 'This is the home page.', heroText);
                const heroP = createHtmlElement('p', 'hero-p', ['hero-text'], 'Give a look at this hero section!', heroText);
                const heroBtn = createHtmlElement('button', 'hero-btn', null, 'Reservation', heroText);


        //2 COL img-text SECTION
        const itDiv = createHtmlElement('div', 'home-it-div', ['section-div-two'], null, div);

            const itImg = createHtmlElement('img', 'home-it-img', null, null, itDiv);
                itImg.src = hero_img;

            const itText = createHtmlElement('div', 'home-ittext-div', null, null, itDiv);
                const itH2 = createHtmlElement('h2', 'home-it-h2', null, 'A two column img-text', itText);
                const itP = createHtmlElement('p', 'home-it-p', null, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit', itText);


        //3 COL text SECTION (da provare il text wrapper su tre colonne)
        const tttDiv = createHtmlElement('div', 'home-ttt-div', ['section-div-three'], null, div);

            const tttText1 = createHtmlElement('div', 'home-ttt-text1', null, null, tttDiv);
                const tttH2 = createHtmlElement('h2', 'home-ttt-h2', null, 'A three column img-text', tttText1);
                const tttP1 = createHtmlElement('p', 'home-it-p1', null,  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', tttText1);
            const tttText2 = createHtmlElement('div', 'home-ttt-text2', null, null, tttDiv);    
                const tttP2 = createHtmlElement('p', 'home-it-p1', null, 'At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident.', tttText2);
            const tttText3 = createHtmlElement('div', 'home-ttt-text3', null, null, tttDiv);
                const tttP3 = createHtmlElement('p', 'home-it-p1', null, 'Totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.', tttText3);

        
        //2 ROWS img-text/text-img SECTION
        const ittiDiv = createHtmlElement('div', 'home-itti-div', ['section-div-four'], null, div);

            const ittiUp = createHtmlElement('div', 'home-itti-up', null, null, ittiDiv);
                const ittiUpText = createHtmlElement('div', 'home-itti-up-text', null, null, ittiUp);
                    const ittiUpH2 = createHtmlElement('h2', 'home-itti-up-h2', null, 'An itti up', ittiUpText);
                    const ittiUpP = createHtmlElement('p', 'home-itti-up-p', null, 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.', ittiUpText);
                const ittiUpImg = createHtmlElement('img', 'home-itti-up-img', null, null, ittiUp);
                    ittiUpImg.src = hero_img;

            const ittiDw = createHtmlElement('div', 'home-itti-dw', null, null, ittiDiv);
            const ittiDwImg = createHtmlElement('img', 'home-itti-dw-img', null, null, ittiDw);
                ittiDwImg.src = hero_img;
            const ittiDwText = createHtmlElement('div', 'home-itti-dw-text', null, null, ittiDw);
                const ittiDwH2 = createHtmlElement('h2', 'home-itti-dw-h2', null, 'An itti down', ittiDwText);
                const ittiDwP = createHtmlElement('p', 'home-itti-dw-p', null, 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.', ittiDwText);

        //CALL TO ACTION SECTION
        const ctaDiv = createHtmlElement('div', 'home-cta-div', null, null, div);
            const ctaImg = createHtmlElement('img', 'home-cta-img', null, null, ctaDiv);
                ctaImg.src = hero_img;
            const ctaText = createHtmlElement('div', 'home-cta-text', null, null, ctaDiv);
                const ctaH2 = createHtmlElement('h2', 'home-cta-h2', null, 'A Call to Action!', ctaText);
                const ctaP = createHtmlElement('p', 'home-cta-p', null, 'Et harum quidem rerum facilis est et expedita distinctio.', ctaText);
                const ctaBtn = createHtmlElement('button', 'home-cta-btn', null, 'Reserve', ctaText);
                const ctaTop = createHtmlElement('button', 'home-cta-top', null, 'Top', ctaText);
            
    }
}