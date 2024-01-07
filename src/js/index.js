var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const header = document.header;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const list = document.querySelector("#list").cloneNode(1);

// При клике на иконку burger вызываем ф-ию burgerHandler
burger.addEventListener("click", burgerHandler);

// Выполняем действия при клике ..
function burgerHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  burger.classList.toggle("active");
  header.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(list);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(list.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  burger.classList.remove("active");
  header.classList.remove("noscroll");
}