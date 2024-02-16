import toggleMenu from "./modules/header/toggleMenu";
import togglePrice from "./modules/togglePrice";

window.addEventListener("DOMContentLoaded", function () {
    const plan = document.querySelector(".plan") 

    if (plan) {
        togglePrice();
    }

    toggleMenu();
    
});
