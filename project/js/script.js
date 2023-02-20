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
        "Айсын хороший человек",
        
    ]
};

const advImg = document.querySelectorAll(".promo__adv img")
const advText = document.querySelector(".promo__adv-title")
const genre = document.querySelector(".promo__genre")
const bg = document.querySelector(".promo__bg")
const list = document.querySelector(".promo__interactive-list")
const form = document.querySelector("form.add")
const formButton = form.querySelector("button")
const input = document.querySelector(".adding__input")


// 1
function deleteAdv(adv) {
    adv.forEach(item => {
        item.remove();
})
}

deleteAdv(advImg);
advText.remove();

function changeGenreText(elem) {
    elem.textContent = "драма"
}
changeGenreText(genre)

function changeBackground(elem) {
    elem.style.backgroundImage = "url('img/bg.jpg')"
}
changeBackground(bg)

function sort(arr) {
    arr.sort();
}
sort(movieDB.movies)

function createFilm (link) {
    list.innerHTML = ""
    link.forEach((item, i) => {
        list.innerHTML += `
        <li class="promo__interactive-item">${i+1}.${item}
            <div class="delete"></div>
        </li>
        `;
    });
    // при удаление элементов которые созданы динамически, эти элементы нужно найти непосредственно через queryselectorall
    document.querySelectorAll(".delete").forEach((btn, i) => {
        btn.addEventListener("click", () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
        });
    });
}
createFilm(movieDB.movies);


const addFilms = (event) => {
    event.preventDefault();
    
    let newFilm = input.value;
    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = newFilm.substring(0, 21).concat("...")
        }
        movieDB.movies.push(newFilm);
        sort(movieDB.movies);
        createFilm(movieDB.movies);
    }
    event.target.reset();
}

form.addEventListener("submit", addFilms);



