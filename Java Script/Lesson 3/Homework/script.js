// Exercise 1
// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

console.log("Exercise 1");

let arrNum = [3 , 8, 15, 22, 11];
let arrStr = ["Andriy" , "Maria" , "Petro" , "Oksana" , "Svitlana"];
let arrNumStrBoo = [15, "age" , true , "black" , false];
console.log(arrNum , arrStr , arrNumStrBoo);

console.log("______________");

// Exercise 2
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

console.log("Exercise 2");

let array1 = [];
array1[0] = "Andriy";
array1[1] = 22;
array1[2] = true;
console.log(array1);

console.log("______________");

for (let i = 0; i < 10; i++) {
    document.write("<div>Hello World</div>");
}
document.write("<hr>");

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello World ${i}</div>`);
}
document.write("<hr>");

let i = 0;
while (i < 20) {
    document.write("<h1>Title</h1>");
    i++;
}
document.write("<hr>");

let k = 0;
while (k < 20) {
    document.write(`<h1>Title ${k}</h1>`);
    k++;
}
document.write("<hr>");

// Exercise 3
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

console.log("Exercise 3");

let arrNumbers = [80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89];
for (let elements of arrNumbers) {
    console.log(elements);
}

console.log("______________");

let arrString = ["Andriy" , "Maria" , "Svitlana" , "Oksana" , "Petro" , "Olia" , "Ania" , "Matviy" , "Max" , "Ihor"];
for (let elements of arrString) {
    console.log(elements);
}

console.log("______________");

let arrAny = ["Svitlana" , null , "Andriy" , 22 , false , undefined , "Matviy" , 2 , true ,"Petro"];
for (let elements of arrAny) {
    console.log(elements);
}

console.log("______________");

let arrAny1 = ["Svitlana" , 15 , "Andriy" , 22 , false , 42 , "Matviy" , 2 , true ,"Petro"];
for (let elemets of arrAny1) {
    if (typeof elemets === "boolean") {
        console.log(elemets);
    }
}

console.log("______________");

let arrAny2 = ["Svitlana" , 15 , "Andriy" , 22 , false , 42 , "Matviy" , 2 , true ,"Petro"];
for (let elemets of arrAny2) {
    if (typeof elemets === "number") {
        console.log(elemets);
    }
}

console.log("______________");

let arrAny3 = ["Svitlana" , 15 , "Andriy" , 22 , false , 42 , "Matviy" , 2 , true ,"Petro"];
for (let elemets of arrAny3) {
    if (typeof elemets === "string") {
        console.log(elemets);
    }
}

console.log("______________");

// Exercise 4
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

console.log("Exercise 4");

let array2 = [];
array2[0] = "Andriy";
array2[1] = 22;
array2[2] = true;
array2[3] = false;
array2[4] = 15;
array2[5] = true;
array2[6] = "Andriy";
array2[7] = 8;
array2[8] = "Beta";
array2[9] = "Alfa";

for (let elements of array2) {
    console.log(elements);
}
console.log("______________");

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<p>${i}</p>`)
}
console.log("______________");
document.write("<hr>");

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<p>${i}</p>`)
}
console.log("______________");
document.write("<hr>");

for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<p>${i}</p>`)
}
console.log("______________");
document.write("<hr>");

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<p>${i}</p>`)
    }
}
console.log("______________");
document.write("<hr>");

for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(`<p>${i}</p>`)
    }
}
console.log("______________");
document.write("<hr>");
