// Exercise 1
// -Створити змінні.Присвоїти кожному з них значення:
//     'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log("Exercise 1");
let hello = "hello";
let owu = "owu";
let com = "com";
let ua = "ua";
let a = 1;
let b = 10;
let c = -999;
let d = 123;
let pi = 3.14;
let e = 2.7;
let g = 16;
let t = true;
let f = false;

console.log(hello);
alert(hello);
document.write(hello + " ");
console.log(owu);
alert(owu);
document.write(owu + " ");
console.log(com);
alert(com);
document.write(com + " ");
console.log(ua);
alert(ua);
document.write(ua + " ");
console.log(a);
alert(a);
document.write(a + " ");
console.log(b);
alert(b);
document.write(b + " ");
console.log(c);
alert(c);
document.write(c + " ");
console.log(d);
alert(d);
document.write(d + " ");
console.log(pi);
alert(pi);
document.write(pi + " ");
console.log(e);
alert(e);
document.write(e + " ");
console.log(g);
alert(g);
document.write(g + " ");
console.log(t);
alert(t);
document.write(t + " ");
console.log(f);
alert(f);
document.write(f + " ");
console.log("______________");
document.write("<hr>");

// Exercise 2
// Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log("Exercise 1");
hello = "world";
owu = "nft";
com = "co";
ua = "uk";
a = 3;
b = 22;
c = -885;
d = 321;
pi = 8.45;
e = 4.5;
g = 32;
t = false;
f = true;

console.log(hello);
alert(hello);
document.write(hello + " ");
console.log(owu);
alert(owu);
document.write(owu + " ");
console.log(com);
alert(com);
document.write(com + " ");
console.log(ua);
alert(ua);
document.write(ua + " ");
console.log(a);
alert(a);
document.write(a + " ");
console.log(b);
alert(b);
document.write(b + " ");
console.log(c);
alert(c);
document.write(c + " ");
console.log(d);
alert(d);
document.write(d + " ");
console.log(pi);
alert(pi);
document.write(pi + " ");
console.log(e);
alert(e);
document.write(e + " ");
console.log(g);
alert(g);
document.write(g + " ");
console.log(t);
alert(t);
document.write(t + " ");
console.log(f);
alert(f);
document.write(f + " ");
console.log("______________");
document.write("<hr>");

// Exercise 3
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//     З'єднати їх в одну змінну person. (Не об'єкт)

console.log("Exercise 3");
let firstName = "Гаванчак";
let middleName = "Андрій";
let lastName = "Ігорович";
let person = firstName + " " + middleName + " " + lastName;
console.log(person);
console.log("______________");

// Exercise 4
// За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

console.log("Exercise 4");
let name = prompt("Write your name");
let surname = prompt("Write your surname");
let age = prompt("Write your age");

console.log("Welcom " + name + " " + surname + ". You have " + age + " years.");
document.write("Welcom " + name + " " + surname + ". You have " + age + " years.");

console.log("______________");
document.write("<hr>");

// Exercise 5
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

console.log("Exercise 5");
let aa = 100;
let bb = '100';
let cc = true;

console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);
console.log("______________");

// Exercise 6
// Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log("Exercise 6");
console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 === 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 < 10);
console.log(10 > 10);
console.log(10 != 10);
console.log(123 === "123");
console.log(123 == "123");
console.log("______________");

// Exercise 7
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");

let str = "20";
let aaa = 5;

document.write(str + aaa + "<br/>");
// "20" + 5 = "205"
// "205" + "<br/>" = "205"

document.write(str - aaa + "<br/>");
// "20" - 5 = 15
// 15 + "<br/>" = "15"

document.write(str * "2" + "<br/>");
// "20" * "2" = 40
// 40 + "<br/>" = "40"

document.write(str / 2 + "<br/>");
// "20" / 2 = 10
// 10 + "<br/>" = "10"








