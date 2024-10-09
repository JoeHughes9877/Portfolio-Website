const menuOpenButton = document.querySelector ("#menuOpenButton")
const menuCloseButton = document.querySelector ("#menuCloseButton")

menuOpenButton.addEventListener("click", () => {
    //toggles the sidebar
    document.body.classList.toggle("showMobileMenu");
});

//closes sideba
menuCloseButton.addEventListener("click", () => menuOpenButton.click());