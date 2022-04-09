// Exercise 1
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

console.log("Exercise 1");

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArr = [
    new User(8, "Vasya", "Kost", "vasyaKost@mail.com", +380686836868),
    new User(6, "Andriy", "San", "andriySan@mail.com", +380686836869),
    new User(10, "Mariya", "San", "mariyaSan@mail.com", +380686836861),
    new User(4, "Olia", "Viter", "oliaViter@mail.com", +380686836862),
    new User(5, "Julia", "Dohch", "juliaDohch@mail.com", +380686836863),
    new User(9, "Marko", "Dohch", "markoDohch@mail.com", +380686836864),
    new User(7, "Danulo", "Dohch", "danuloDohch@mail.com", +380686836865),
    new User(1, "Ira", "Kost", "iraKost@mail.com", +380686836866),
    new User(2, "Andriy", "Viter", "AndriyViter@mail.com", +380686836867),
    new User(3, "Matviy", "Viter", "matviyViter@mail.com", +380686836845)
];
console.log(userArr);

console.log("______________");

// Exercise 2
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log("Exercise 2");

console.log(userArr.filter(user => user.id % 2 === 0));

console.log("______________");

// Exercise 3
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log("Exercise 3");

console.log(userArr.sort((current, next) => current.id - next.id));

console.log("______________");

// Exercise 4
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів) створити пустий масив, наповнити його 10 об'єктами Client

console.log("Exercise 4");

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArr = [
    new Client(8, "Vasya", "Kost", "vasyaKost@mail.com", +380686836868, ["Apple", "Orange", "Banana", "Strawberries"]),
    new Client(6, "Andriy", "San", "andriySan@mail.com", +380686836869, ["Grape", "Banana", "Apple", "Kiwi", "Strawberries"]),
    new Client(10, "Mariya", "San", "mariyaSan@mail.com", +380686836861, ["Apple", "Mango", "Banana", "Grapefruit"]),
    new Client(4, "Olia", "Viter", "oliaViter@mail.com", +380686836862, ["Apple", "Orange", "Watermelon", "Grapefruit"]),
    new Client(5, "Julia", "Dohch", "juliaDohch@mail.com", +380686836863, ["Tangerine", "Orange", "Grape", "Kiwi", "Grapefruit", "Strawberries"]),
    new Client(9, "Marko", "Dohch", "markoDohch@mail.com", +380686836864, ["Watermelon", "Orange", "Mango"]),
    new Client(7, "Danulo", "Dohch", "danuloDohch@mail.com", +380686836865, ["Apple", "Watermelon", "Tangerine", "Kiwi"]),
    new Client(1, "Ira", "Kost", "iraKost@mail.com", +380686836866, ["Apple", "Orange", "Banana", "Strawberries"]),
    new Client(2, "Andriy", "Viter", "AndriyViter@mail.com", +380686836867, ["Mango", "Grape", "Watermelon", "Grapefruit"]),
    new Client(3, "Matviy", "Viter", "matviyViter@mail.com", +380686836845, ["Apple", "Tangerine", "Banana"])
];
console.log(clientArr);

console.log("______________");

// Exercise 5
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log("Exercise 5");

console.log(clientArr.sort((current, next) => current.order.length - next.order.length));

console.log("______________");