import { content } from "../index";
import { createHtmlElement } from "./functions";
import hero_img from "../img/hero.jpg"
import icon_phone from "../assets/icon_phone.svg"
import icon_mail from "../assets/icon_mail.svg"
import icon_address from "../assets/icon_address.svg"


export default class Contact {
    static render() {
        const div = createHtmlElement('div', 'contact-div', null, null, content);

        //SUBTS SECTION
        const subtsDiv = createHtmlElement('div', 'contact-subts-div', null, null, div);
        const subtsImg = createHtmlElement('img', 'contact-subts-img', null, null, subtsDiv);
            subtsImg.src = hero_img;
        const subtsText = createHtmlElement('div', 'contact-subts-text', null, null, subtsDiv);
            const subtsH2 = createHtmlElement('h2', 'contact-subts-h2', null, 'Discover our services!', subtsText);
            const subtsP = createHtmlElement('p', 'contact-subts-p', null, 'Et harum quidem rerum facilis est et expedita distinctio.', subtsText);
            const subtsBtn = createHtmlElement('button', 'contact-subts-btn', null, 'Take me home!', subtsText); 

        //LARGE TEXT SECTION
        const ltDiv = createHtmlElement('div', 'contact-lt-div', ['section-div-four'], null, div);
            const ltH2 = createHtmlElement('h2', 'contact-lt-h2', null, 'Let we know!', ltDiv);
            const ltP = createHtmlElement('p', 'contact-lt-p', ['columnedup'], 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.', ltDiv);

        //CONTACT SECTION
        const cDiv = createHtmlElement('div', 'contact-c-div', ['section-div-four'], null, div);
            //mail
            const mailSubDiv = createHtmlElement('div', 'contact-cmail-div', null, null, cDiv);
                const cMailIcn = createHtmlElement('img', 'contact-cmail-icon', ['icon'], null, mailSubDiv);
                    cMailIcn.src = icon_mail;
                const cMailDiv = createHtmlElement('div', 'contact-cmail-textdiv', ['section-div-four'], null, mailSubDiv);
                    const cMailH2 = createHtmlElement('h2', 'contact-cmail-h2', null, 'e-mail', cMailDiv);
                    const cMailP1 = createHtmlElement('p', 'contact-cmail-p1', null, 'name@example.info', cMailDiv);
                    const cMailP2 = createHtmlElement('p', 'contact-cmail-p2', null, 'company@example.com', cMailDiv);
            //phone
            const phoneSubDiv = createHtmlElement('div', 'contact-cphone-div', null, null, cDiv);
                const cPhoneIcn = createHtmlElement('img', 'contact-cphone-icon', ['icon'], null, phoneSubDiv);
                    cPhoneIcn.src = icon_phone;
                const cPhoneDiv = createHtmlElement('div', 'contact-cphone-textdiv', ['section-div-four'], null, phoneSubDiv);
                    const cPhoneH2 = createHtmlElement('h2', 'contact-cphone-h2', null, 'Phone', cPhoneDiv);
                    const cPhoneP1 = createHtmlElement('p', 'contact-cphone-p1', null, '+00 123 456 7', cPhoneDiv);
                    const cPhoneP2 = createHtmlElement('p', 'contact-cphone-p2', null, '+00 890 123 4', cPhoneDiv);
            //address
            const addressSubDiv = createHtmlElement('div', 'contact-caddress-div', null, null, cDiv);
                const cAddressIcn = createHtmlElement('img', 'contact-caddress-icon', ['icon'], null, addressSubDiv);
                    cAddressIcn.src = icon_address;
                const cAddressDiv = createHtmlElement('div', 'contact-caddress-textdiv', ['section-div-four'], null, addressSubDiv);
                    const cAddressH2 = createHtmlElement('h2', 'contact-caddress-h2', null, 'Come to visit us!', cAddressDiv);
                    const cAddressMap = createHtmlElement('img', 'contact-caddress-map', null, null, cAddressDiv);
                        cAddressMap.src = hero_img;
                    const cAddressP2 = createHtmlElement('p', 'contact-caddress-p2', null, 'Via del Campo 1017, 00172 Roma', cAddressDiv);
    }
}