// Exercise 1
//- створити функцію яка обчислює та повертає площу прямокутника
console.log("Exercise 1");

let sRectangle = (a , b) => a * b;

console.log(sRectangle(4,3));

console.log("______________");

// Exercise 2
// - створити функцію яка обчислює та повертає площу кола

console.log("Exercise 2");

let pi = 3.14;
let sCircle = (r) => pi * (r * r);

console.log(sCircle(5));

console.log("______________");

// Exercise 3
// - створити функцію яка обчислює та повертає площу циліндру
console.log("Exercise 3");

let sCylinder = (r , h) => 2 * pi * r * h;

console.log(sCylinder(3 , 4));

console.log("______________");

// Exercise 4
// - створити функцію яка приймає масив та виводить кожен його елемент
console.log("Exercise 4");

let arrayPrintItem = (arr) => {
    for (let item of arr) {
        console.log(item);
    }
}
arrayPrintItem([22 , "Andriy" , 15]);
console.log("______________");

// Exercise 5
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createP = (text) => document.write(`<p>${text}</p>`);

createP("lorem");
document.write("<hr>");

// Exercise 6
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createLi3 = (text) => {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}

createLi3("lorem");
document.write("<hr>");

// Exercise 7
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createLi = (text , num) => {
    document.write("<ul>");
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}

createLi("lorem" , 5);
document.write("<hr>");

// Exercise 8
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let createList = (arrList) => {
    document.write("<ul>");
    for (let item of arrList) {
        document.write(`<li>${item}</li>`);
    }
    document.write("</ul>");
}

createList(["menu" , "logo" , "help" , "wallet"]);
document.write("<hr>");

// Exercise 9
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let createObjBlock = (arrObj) => {
    for (let item of arrObj) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
    }
}
createObjBlock([
    {id:1 , name:"Andriy", age:22},
    {id:2 , name:"Petro", age:20},
    {id:3 , name:"Ihor", age:25}
]);