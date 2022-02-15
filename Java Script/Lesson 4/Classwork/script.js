// Exercise 1
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)console.log("Exercise 1");

function minNum (num1, num2, num3) {
    if (num1 < num2 && num1 < num3 || num1 === num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}
minNum(22, 8, 15);

console.log("______________");

// Exercise 2
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function maxNum (num1, num2, num3) {
    if (num1 > num2 && num1 > num3 || num1 === num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}
maxNum(22, 8, 15);

console.log("______________");

// Exercise 3
// - створити функцію яка повертає найбільше число з масиву

function maxNumArr (arr) {
    let max = arr[0];
    for (let arrElement of arr) {
        if (max <= arrElement) {
            max = arrElement;
        }
    }
    return max;
}

console.log(maxNumArr([15 , 22 , 56 , 32 , 2]));

console.log("______________");

// Exercise 4
// - створити функцію яка повертає найменьше число з масиву

function minNumArr (arr) {
    let min = arr[0];
    for (let arrElement of arr) {
        if (min >= arrElement) {
            min = arrElement;
        }
    }
    return min;
}

console.log(minNumArr([15 , 22 , 56 , 32 , 2]));

console.log("______________");

// Exercise 5
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

function sumArr (arr) {
    let numNull = 0;
    for (let arrElement of arr) {
        numNull = numNull + arrElement;
    }
    return numNull;
}

console.log(sumArr([15, 25, 50, 33, 2]));

console.log("______________");

// Exercise 6
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function averageNum (arr) {
    let numNull = 0;
    for (let arrElement of arr) {
        numNull = numNull + arrElement;
    }
    numNull = numNull / arr.length;
    return numNull;
}

console.log(averageNum([15, 25, 50, 33, 2]));

console.log("______________");

// Exercise 7
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

function maxMinNum(...nums) {
    let min = nums[0];
    let max = nums[0];
    for (let num of nums) {
        if (min >= num) {
            min = num;
        }
        if (max <= num) {
            max = num;
        }

    }
    console.log(max);
    return min;
}

console.log(maxMinNum(15, 25, 50, 33, 2));

console.log("______________");

// Exercise 8
// - створити функцію яка заповнює масив рандомними числами

function randomNumArr (lenght) {
    let array = [];
    for (let i = 0; i < lenght; i++) {
        let item = Math.floor(Math.random()*100);
        array.push(item);
    }
    return array;
}

console.log(randomNumArr(5));

console.log("______________");

// Exercise 9
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

function randomNumArrLimit (lenght , limit) {
    let array = [];
    for (let i = 0; i < lenght; i++) {
        let item = Math.floor(Math.random() * limit);
        array.push(item);
    }
    return array;
}

console.log(randomNumArrLimit(5 , 22));

console.log("______________");

// Exercise 10
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reversArr (arr) {
    let arrRevers = [];
    for (let i = arr.length - 1 ; i >= 0; i--) {
        arrRevers.push(arr[i]);
    }
    return arrRevers;
}

console.log(reversArr([15 , 22 , 3 , 7]));
