// Exercise 1
//- Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

console.log("Exercise 1");

let n1 = "Harry..Potter";
let n2 = "Ron---Whisley";
let n3 = "Hermione__Granger";

let normalize = (name) => {
    let arr = [];
    if (name.includes(".")) {
        arr = name.split(".");
    } else if (name.includes("-")) {
        arr = name.split("-");
    } else if (name.includes("_")) {
        arr = name.split("_");
    }
    let result = [];
    arr.forEach(item => {
        if (item) {
            result.push(item);
        }
    });
    result = result.join(" ");
    return result;
}

console.log(normalize(n1));
console.log(normalize(n2));
console.log(normalize(n3));

console.log("______________");

// Exercise 2
//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

console.log("Exercise 2");

let randomArr = length => {
    arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random()*100));
    }
    return arr;
}

console.log(randomArr(5));

console.log("______________");

// Exercise 3
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     Відсортувати його за допомоги sort

console.log("Exercise 3");

let arrSort = (randomArr(8));
console.log(arrSort.sort((current, next) => {
    return current - next;
}));

console.log("______________");

// Exercise 4
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log("Exercise 4");

let arrFilter = (randomArr(8));
console.log(arrFilter);
console.log(arrFilter.filter(num  => num % 2 === 0));

console.log("______________");

// Exercise 5
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log("Exercise 5");

let arrMap = (randomArr(8));
console.log(arrMap.map(value => value.toString()));

console.log("______________");

// Exercise 6
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
console.log("Exercise 6");

let nums = [11,21,3];
let sortNums = (arr, direction) => {
    if (direction === "ascending") {
        console.log(arr.sort((current, next) => current - next));
    }else if (direction === "descending") {
        console.log(arr.sort((current, next) => next - current));
    } else {
        console.log("Not the correct direction ")
    }
}

sortNums(nums, 'ascending'); // [3,11,21]
sortNums(nums, 'descending'); // [21,11,3]

console.log("______________");


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Exercise 7
// -- відсортувати його за спаданням за monthDuration
console.log("Exercise 7");

console.log(coursesAndDurationArray.sort((current, next) => {
    return next.monthDuration - current.monthDuration;
}));

console.log("______________");

// Exercise 8
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log("Exercise 8");

console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5));

console.log("______________");











