// Exercise 1
// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

console.log("Exercise 1");

let time = prompt("Write minutes (from 0 to 59)");
if (0 <= time && time <= 15) {
    console.log("The number falls in the first part of the hour");
} else if (15 < time && time <= 30) {
    console.log("The number falls in the second part of the hour");
} else if (30 < time && time <= 45) {
    console.log("The number falls in the third part of the hour");
} else if (45 < time && time < 60) {
    console.log("The number falls in the fourth part of the hour");
} else {
    console.log("You wrote not a minute")
}

console.log("______________");

// Exercise 2
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

console.log("Exercise 2");

let day = prompt("Write day (from 1 to 31)")
if (1 <= day && day <= 10) {
    console.log("The number falls in the first part of the month");
} else if (10 < day && day <= 20) {
    console.log("The number falls in the second part of the month");
} else if (20 < day && day <= 31) {
    console.log("The number falls in the third part of the month");
} else {
    console.log("You wrote not a day")
}

console.log("______________");

// Exercise 3
// У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта
// - з коротким записом(тернаркою)

console.log("Exercise 3");

let test = (confirm() === true) ? ("Вірно") : ("Неправильно");
console.log(test);

let newTest = confirm();
if (newTest === true) {
    console.log("Вірно");
} else {
    console.log("Неправильно");
}

console.log("______________");

// Exercise 4
// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при a, що дорівнює 1, 0, -3

console.log("Exercise 4");

let a = (+prompt() !== 0) ? ("Вірно") : ("Неправильно");
console.log(a);

console.log("______________");

// Exercise 5
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер
// дня тижня і на екрані відображається інфа що заплановано на цей день.

console.log("Exercise 5");

let numberDay = +prompt("Введіть порядковий номер дня тижня");
switch (numberDay) {
    case 1 :
    case 3 :
    case 5 :
        console.log("На 20:00 лекція Okten");
        break;
    case 2 :
    case 4 :
        console.log("Класна робота");
        break;
    case 6 :
        console.log("Англійська мова");
        break;
    case 7 :
        console.log("Вихідний");
        break;
    default :
        console.log("Ви ввели некоректний порядковий номер дня тижня");
}

console.log("______________");

// Exercise 6
// Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

console.log("Exercise 6");

let year = +prompt("Введіть рік");
switch (year % 4) {
    case 0 :
        console.log("Високосний рік");
        break;
    case 1 :
    case 2 :
    case 3 :
        console.log("Невисокосний рік");
        break;
    default :
        console.log("Ви не ввели рік");
}

console.log("______________");

// Exercise 7
// Використовуючи конструкцію if..else, напишіть код, який запитуватиме:
// „Яка «офіційна» назва JavaScript?“ Якщо користувач вводить «ECMAScript»,
// то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

console.log("Exercise 7");

let script = prompt("Яка «офіційна» назва JavaScript?");
if (script === "ECMAScript") {
    console.log("Правильно!");
} else {
    console.log("Не знаєте? ECMAScript!");
}

console.log("______________");