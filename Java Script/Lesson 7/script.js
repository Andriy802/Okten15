// Exercise 1
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

console.log("Exercise 1");

// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let userArr = [
//     new User(8, "Vasya", "Kost", "vasyaKost@mail.com", +380686836868),
//     new User(6, "Andriy", "San", "andriySan@mail.com", +380686836869),
//     new User(10, "Mariya", "San", "mariyaSan@mail.com", +380686836861),
//     new User(4, "Olia", "Viter", "oliaViter@mail.com", +380686836862),
//     new User(5, "Julia", "Dohch", "juliaDohch@mail.com", +380686836863),
//     new User(9, "Marko", "Dohch", "markoDohch@mail.com", +380686836864),
//     new User(7, "Danulo", "Dohch", "danuloDohch@mail.com", +380686836865),
//     new User(1, "Ira", "Kost", "iraKost@mail.com", +380686836866),
//     new User(2, "Andriy", "Viter", "AndriyViter@mail.com", +380686836867),
//     new User(3, "Matviy", "Viter", "matviyViter@mail.com", +380686836845)
// ];
// console.log(userArr);

console.log("______________");

// Exercise 2
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log("Exercise 2");

// console.log(userArr.filter(user => user.id % 2 === 0));

console.log("______________");

// Exercise 3
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log("Exercise 3");

// console.log(userArr.sort((current, next) => current.id - next.id));

console.log("______________");

// Exercise 4
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів) створити пустий масив, наповнити його 10 об'єктами Client

console.log("Exercise 4");

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clientArr = [
//     new Client(8, "Vasya", "Kost", "vasyaKost@mail.com", +380686836868, ["Apple", "Orange", "Banana", "Strawberries"]),
//     new Client(6, "Andriy", "San", "andriySan@mail.com", +380686836869, ["Grape", "Banana", "Apple", "Kiwi", "Strawberries"]),
//     new Client(10, "Mariya", "San", "mariyaSan@mail.com", +380686836861, ["Apple", "Mango", "Banana", "Grapefruit"]),
//     new Client(4, "Olia", "Viter", "oliaViter@mail.com", +380686836862, ["Apple", "Orange", "Watermelon", "Grapefruit"]),
//     new Client(5, "Julia", "Dohch", "juliaDohch@mail.com", +380686836863, ["Tangerine", "Orange", "Grape", "Kiwi", "Grapefruit", "Strawberries"]),
//     new Client(9, "Marko", "Dohch", "markoDohch@mail.com", +380686836864, ["Watermelon", "Orange", "Mango"]),
//     new Client(7, "Danulo", "Dohch", "danuloDohch@mail.com", +380686836865, ["Apple", "Watermelon", "Tangerine", "Kiwi"]),
//     new Client(1, "Ira", "Kost", "iraKost@mail.com", +380686836866, ["Apple", "Orange", "Banana", "Strawberries"]),
//     new Client(2, "Andriy", "Viter", "AndriyViter@mail.com", +380686836867, ["Mango", "Grape", "Watermelon", "Grapefruit"]),
//     new Client(3, "Matviy", "Viter", "matviyViter@mail.com", +380686836845, ["Apple", "Tangerine", "Banana"])
// ];
// console.log(clientArr);

console.log("______________");

// Exercise 5
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log("Exercise 5");

// console.log(clientArr.sort((current, next) => current.order.length - next.order.length));

console.log("______________");

// Exercise 6
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log("Exercise 6");

// function Car(model, manufacturer, year, maxSpeed, engineCapacity) {
//     let car = {
//         model: model,
//         manufacturer: manufacturer,
//         year: year,
//         maxSpeed: maxSpeed,
//         engineCapacity: engineCapacity
//     };
//     return {
//         drive: function () {
//             console.log(`їдемо зі швидкістю ${car.maxSpeed} на годину`);
//         },
//         info: function () {
//             console.log(car);
//         },
//         increaseMaxSpeed: function (newSpeed) {
//             return car.maxSpeed = car.maxSpeed + newSpeed;
//         },
//         changeYear: function (newValue) {
//             return car.year = newValue;
//         },
//         addDriver: function (driver) {
//             return car.driver = driver;
//         }
//     }
// }
//
// let carCreator = Car("BMW", "Німеччина", 2015, 220, 2.0);
// carCreator.drive();
// carCreator.info();
// carCreator.increaseMaxSpeed(20);
// carCreator.changeYear(2016);
// carCreator.addDriver({
//     name: "Andriy",
//     age: 22,
//     experience: "2 years"
// });
// carCreator.info();

console.log("______________");

// Exercise 7
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log("Exercise 7");

// class Car {
//     constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     info = function () {
//         console.log(this);
//     };
//     increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed = this.maxSpeed + newSpeed;
//     };
//     changeYear = function (newValue) {
//         return this.year = newValue;
//     };
//     addDriver = function (driver) {
//         return this["driver"] = driver;
//     };
// }
//
// let car1 = new Car ("BMW", "Німеччина", 2015, 220, 2.0);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(20);
// car1.changeYear(2016);
// car1.addDriver({
//     name: "Andriy",
//     age: 22,
//     experience: "2 years"
// });
// car1.info();

console.log("______________");

// Exercise 8
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log("Exercise 8");

//НЕ ДОРОБЛЕНО
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let ArrayCinderellas = [
    new Cinderella("Maria", 18, 37),
    new Cinderella("Olia", 38, 36),
    new Cinderella("Yaryna", 26, 38),
    new Cinderella("Julia", 28, 39),
    new Cinderella("Svitlana", 43, 38),
    new Cinderella("Maria", 22, 37),
    new Cinderella("Anna", 18, 36),
    new Cinderella("Cristina", 24, 36),
    new Cinderella("Marta", 18, 36),
    new Cinderella("Olia", 27, 38)
];



console.log("______________");






