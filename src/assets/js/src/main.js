import toggleMenu from "./modules/header/toggleMenu";
import togglePrice from "./modules/togglePrice";
import videoPlay from "./modules/video/videoPlay";
import accordionItems from "./modules/accordion/accordionItems";

window.addEventListener("DOMContentLoaded", function () {
    const plan = document.querySelector(".plan") 
    const video = document.querySelector(".video")
    const accordion = document.querySelector(".accordion")

    if (plan) {
        togglePrice();
    }

    if (video) {
        videoPlay();
    }

    if (accordion) {
        accordionItems();
    }

    toggleMenu();
    
});
