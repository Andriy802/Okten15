// Exercise 1
// Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.

console.log("Exercise 1");
let array = [3, 8, 15, 22, 11, 88, 44, 37, 69, 5];
console.log(array);
let result = array[0] + array[1] + array[2] + array[3] + array[4]
    + array[5] + array[6] + array[7] + array[8] + array[9];
console.log(result);
console.log("________________");

// Exercise 2
// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let bookLondon = {
    name: "london",
    pages: 200,
    genre: "drama"
};

// Exercise 3
// Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let bookShip = {
    name: "ship",
    pages: 300,
    genre: "drama",
    authors: "Jon"
};

// Exercise 4
// Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт

console.log("Exercise 4");
let arrayBooks = [{
    name: "london",
    pages: 200,
    genre: "drama",
    authors: "Edvart"
}, {
    name: "ship",
    pages: 300,
    genre: "drama",
    authors: "Jon"
}, {
    name: "flight",
    pages: 100,
    genre: "drama",
    authors: "Muhailo"
}];
console.log(arrayBooks[0]);
console.log(arrayBooks[1]);
console.log(arrayBooks[2]);
console.log("________________");

// Exercise 5
// Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

console.log("Exercise 5");
let height = 23;
let width = 10;

let s = height * width;
console.log(s);
console.log("________________");

// Exercise 6
// Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

console.log("Exercise 6");
let heightC = 10;
let dC = 4;
let pi = 3.141592;
let rc = dC / 2;
let v = pi * (rc * rc) * heightC;
console.log(v);
console.log("________________");

// Exercise 7
// У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію
// Math.pow (число, ступінь) або оператор зведення в ступінь **).

console.log("Exercise 7");
let n = 3;
let m = 4;
let k = Math.pow(n,2) + Math.pow(m,2);
console.log(k);
console.log("________________");
