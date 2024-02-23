import toggleMenu from "./modules/header/toggleMenu";
import togglePrice from "./modules/togglePrice";
import videoPlay from "./modules/video/videoPlay";
import accordion from "./modules/accordion";

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
        accordion();
    }

    toggleMenu();
    
});
