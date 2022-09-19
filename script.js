const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,



    // Navigation arrows
    navigation: {
        nextEl: '.slider__btn-prev',
        prevEl: '.slider__btn-next',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);
// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
    popup.appendChild(menu);

}

/*Смена языка*/

const langCurrent = document.querySelector('.languages__item--active');
const languages = document.querySelectorAll('.languages__item');

// Попробуйте её самостоятельно разобрать
const siblings = el => [].slice.call(el.parentNode.children).filter(child => (child !== el)); // объявляем функцию, которая будет возвращать соседние элементы

languages.forEach(lang => {
    lang.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (lang.classList.contains('languages__item--active')) {
            siblings(lang).forEach(el => { // для каждого соседнего элемента
                el.classList.add('languages__item--show') // добавляем класс для показа
            })
        } else {
            lang.classList.add('languages__item--active'); // добавляем класс активности
            lang.classList.remove('languages__item--show'); // удаляем класс для показа

            siblings(lang).forEach(el => {
                el.classList.remove('languages__item--active');
                el.classList.remove('languages__item--show');
            })
        }

    });

});
