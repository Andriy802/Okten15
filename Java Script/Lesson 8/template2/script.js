// Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

document.getElementById("main_header").classList.add("main-header");

let ul = document.getElementsByTagName("ul");
ul[0].style.width = "400px";

let liList = document.getElementsByClassName("linkList");
for (let liListElement of liList) {
    liListElement.style.width = "50%";
}

let listElemet2 = document.getElementsByClassName("listElement2");
listElemet2 = listElemet2[0].innerText;
console.log(listElemet2);

for (let liListElement of liList) {
    liListElement.style.background = "gray";
}

let aList = document.getElementsByTagName("a");
for (let aListElement of aList) {
    aListElement.classList.add("anchor");
}

for (let aListElement of aList) {
    if (aListElement.innerText === "link3") {
        aListElement.style.fontSize = "40px";
    }
}

for (let aListElement of aList) {
    aListElement.classList.add("element_XXX");
    aListElement.innerText = "XXX";
}

let subHeader = document.getElementsByClassName("sub-header");
let promptValueBg = prompt("Background color?");
for (let subHeaderElement of subHeader) {
    subHeaderElement.style.background = `${promptValueBg}`;
}

let promptValueCl = prompt("Text color?");
for (let subHeaderElement of subHeader) {
    if (subHeaderElement.innerText === "content 2 segment"){
        subHeaderElement.style.color = `${promptValueCl}`;
    }
}

let content1 = document.getElementsByClassName("content_1");
let content1Prompt = prompt("Введіть текст");
content1 = content1[0].attributes[0].value = `${content1Prompt}`;

let p = document.getElementsByTagName("p");
for (let pElement of p) {
    pElement.style.padding = "20px";
}

let text2 = document.getElementsByClassName("text2");
let content2 = document.getElementsByClassName("content_2");
content2 = content2[0].attributes[0].value;
text2[0].innerText = `${content2}`;