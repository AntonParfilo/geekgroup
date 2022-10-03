// BURGER MENU
const burger_button = document.querySelector('.header__burger');
const burger_menu = document.querySelector(".header__burger_menu");
const burger_closeButton= document.querySelector(".burger__closeBtn");
burger_button.addEventListener("click", () => {
    burger_button.classList.toggle("active");
    burger_menu.classList.toggle("open");
});
burger_closeButton.addEventListener("click", () => {
    burger_button.classList.toggle("active");
    burger_menu.classList.toggle("open");
});
// SEARCH FORM
const burger_search = document.querySelector(".header__serach-wrapper");
const burger_search_close = document.querySelector(".burger__search_close");
const search_menu = document.querySelector(".burger__search");
burger_search.addEventListener("click", () => {
    if(window.innerWidth < 590) search_menu.classList.toggle("open");
});
burger_search_close.addEventListener("click", () => {
    search_menu.classList.toggle("open");
});
// TOOLBAR SELECT PRICE
const slider = document.getElementById('slider');
const price_from = document.getElementById("from_value");
const price_to = document.getElementById("to_value");

noUiSlider.create(slider, {
    start: [0, 1234],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 1234
    }
});
slider.noUiSlider.on('update', function (values, handle) {
    price_from.value=values[0];
    price_to.value=values[1];
});
price_from.addEventListener('change', function () {
    slider.noUiSlider.set([this.value, price_to.value]);
});
price_to.addEventListener('change', function () {
    slider.noUiSlider.set([price_from.value, this.value]);
});
//  ToolBar
const toolbar_wrapper = document.querySelector(".content__toolbar_wrapper");
const toolbar_button =document.querySelector(".content__filter_button");
toolbar_button.addEventListener("click", ()=>{
    if(window.innerWidth < 769) toolbar_wrapper.classList.toggle("show__toolbar");
    
});