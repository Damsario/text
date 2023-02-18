/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Вова умный мужчина",
        "Айсын хороший человек"
    ]
};

const adv = document.querySelectorAll(".promo__adv img");
const advText = document.querySelector(".promo__adv-title");
const poster = document.querySelector(".promo__bg");
const genre = poster.querySelector(".promo__genre")
const list = document.querySelector(".promo__interactive-list")


// 1 
adv.forEach(items => {
    items.remove();
});

advText.remove()

// 2

genre.textContent = "драма"

// 3 

poster.style.backgroundImage = "url('img/bg.jpg')"

// 4,5
movieDB.movies.sort();
console.log(list.innerHTML)
list.innerHTML = ""

movieDB.movies.forEach((film, i) => {
    list.innerHTML += `
    <li class="promo__interactive-item">${i + 1}.${film}
        <div class="delete"></div>
    </li>
    `
});
