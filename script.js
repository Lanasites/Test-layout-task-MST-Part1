document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Удалить активный класс у всех пунктов меню
            menuItems.forEach(i => i.classList.remove('active'));

            // Добавить активный класс к выбранному пункту
            this.classList.add('active');
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".header__menu");
    const menuToggleItem1 = document.querySelector(".menu-item1");
    const menuToggleItem2 = document.querySelector(".menu-item2");
    const menuToggleItem3 = document.querySelector(".menu-item3");
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
    menuToggleItem1.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
    menuToggleItem2.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
    menuToggleItem3.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
