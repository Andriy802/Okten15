// Exercise 1
//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

console.log("Exercise 1");

let hw = "hello world";
let li = "lorem ipsum";
let jic = "javascript is cool";

console.log(hw.length);
console.log(li.length);
console.log(jic.length);

console.log("______________");

hw = hw.toUpperCase();
li = li.toUpperCase();
jic = jic.toUpperCase();
console.log(hw);
console.log(li);
console.log(jic);

console.log("______________");

console.log(hw.toLowerCase());
console.log(li.toLowerCase());
console.log(jic.toLowerCase());

console.log("______________");

str = " dirty string   ";
console.log(str.trim());

console.log("______________");

// Exercise 2
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
console.log("Exercise 2");

let stringToArray = (str) => str.split(" ");
let str2 = 'Каждый охотник желает знать';
let arr = stringToArray(str2);
console.log(arr);
document.writeln(arr);

console.log("______________");

// Exercise 3
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
console.log("Exercise 3");

let str3 = 'Каждый охотник желает знать';
let deleteCharacters = (str , end) => str3.substring(0,end);
console.log(deleteCharacters(str,7));

console.log("______________");

// Exercise 4
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
console.log("Exercise 4");

let str4 = "HTML JavaScript PHP";
let insertDash = (str) => {
    return str.toUpperCase().replaceAll(" " , "-");
}
console.log(insertDash(str4));

console.log("______________");

// Exercise 5
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
console.log("Exercise 5");

let str5 = "hello";
let firstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.substring(1);
}

console.log(firstChar(str5));

// Exercise 6
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
console.log("Exercise 6");

let str6 = "my name is andriy";
let capitalize = (str) => {
    arr = str.split(" ");
    arr = arr.map(item => {return item[0].toUpperCase() + item.substring(1);});
    return arr.join(" ");
};
console.log(capitalize(str6));