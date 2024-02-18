import toggleMenu from "./modules/header/toggleMenu";
import togglePrice from "./modules/togglePrice";
import videoPlay from "./modules/video/videoPlay";

window.addEventListener("DOMContentLoaded", function () {
    const plan = document.querySelector(".plan") 
    const video = document.querySelector(".video")

    if (plan) {
        togglePrice();
    }

    if (video) {
        videoPlay();
    }

    toggleMenu();
    
});
