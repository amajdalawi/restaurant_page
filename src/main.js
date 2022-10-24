import './style.css';
import frogImage from './original.jpg';

(function() {
    let bdy = document.querySelector('body');

    // create header 

    let header_div = document.createElement('div');
    header_div.classList.add('nav-ult')
    bdy.appendChild(header_div);

    let nav_title = document.createElement('div');
    nav_title.innerHTML = 'FANCY RESTAURANT BOIS';
    nav_title.classList.add('nav-title');
    header_div.appendChild(nav_title)

    let nav_btns = document.createElement('ul');
    nav_btns.classList.add('nav-btns');
    header_div.appendChild(nav_btns);

    // create the navigation part of the header 

    let li1 = document.createElement('li');
    li1.innerHTML = 'Home';
    let li2 = document.createElement('li');
    li2.innerHTML = 'Menu';
    let li3 = document.createElement('li');
    li3.innerHTML = 'Contact Us';
    nav_btns.appendChild(li1)
    nav_btns.appendChild(li2)
    nav_btns.appendChild(li3)

    // div id content part
    let div_id = document.createElement('div');
    div_id.setAttribute('id','content');
    bdy.appendChild(div_id);

    // footer part
    let footer_div = document.createElement('div');
    footer_div.classList.add('footer');
    footer_div.innerHTML = 'Made by Abdulrahman Almajdalawi';
    bdy.appendChild(footer_div);

    homePage();
    function homePage() {
        let hero_section = document.createElement('div');
        hero_section.classList.add('hero-section');
        div_id.appendChild(hero_section);

        let hero_text=  document.createElement('div');
        hero_text.innerHTML = "Discover the best type of poison you'll ever lay your eyes on! This is killer stuff right here bois!";
        hero_text.classList.add('hero-text');
        
        let hero_image = document.createElement('div');
        hero_image.classList.add('hero-image');
        let someImg = new  Image();
        someImg.src = frogImage;
        someImg.classList.add('frog-hero-image');
        hero_image.appendChild(someImg);

        hero_section.appendChild(hero_text);
        hero_section.appendChild(hero_image);
        
        let contact_part = document.createElement('div');
        contact_part.classList.add('contact-part');
        contact_part.innerHTML = 'Click here to contact Us!';
        div_id.appendChild(contact_part);

    }

    function menuPage() {

    }

    function contactPage() {

    }
})()