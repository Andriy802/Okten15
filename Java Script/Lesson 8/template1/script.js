// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let content = document.getElementById("content");
console.log(content.innerText);

let rules = document.getElementById("rules");
console.log(rules.innerText);

content.innerText = "Будь який інший текст";

rules.innerText = "Ще один будь який інший текст";

let allElements = document.body.children;
for (let element of allElements) {
    element.style.background = "red";
    element.style.color = "blue";
}

let classList = document.getElementById("rules").classList;
console.log(classList);

let fc_rulesRedText = document.getElementsByClassName("fc_rules");
for (let element of fc_rulesRedText) {
    element.style.color = "red";
}




