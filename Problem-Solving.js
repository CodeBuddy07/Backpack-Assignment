// 1. Task: Array Filtering and Mapping

const people = [
    { name: "Ruhul", age: 25, gender: "male" },
    { name: "Aisha", age: 22, gender: "female" },
    { name: "Rahim", age: 30, gender: "male" },
    { name: "Nusrat", age: 27, gender: "female" },
];

const getMaleNames = (arr) => {
    return arr.filter(person => person.gender === "male").map(person => person.name);
};

console.log(getMaleNames(people));

// 2.Task: Object Manipulation

const books = [
    { title: "Atomic Habits", author: "James Clear", year: 2018 },
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
];

const getBookTitles = (arr) => arr.map(book => book.title);

console.log(getBookTitles(books));

// 3.Task: Function Composition

const square = (n) => n * n;
const double = (n) => n * 2;
const addFive = (n) => n + 5;

const composed = (n) => addFive(double(square(n)));

console.log(composed(3));


// 4.Task: Sorting Objects

const cars = [
    { make: "Toyota", model: "Corolla", year: 2012 },
    { make: "Tesla", model: "Model 3", year: 2020 },
    { make: "Honda", model: "Civic", year: 2015 },
];

const sortCarsByYear = (arr) => arr.sort((a, b) => a.year - b.year);

console.log(sortCarsByYear(cars));


// 5.Task: Array Reduction

const numbers = [3, 17, 9, 21, 4];

const findMax = (arr) => Math.max(...arr);

console.log(findMax(numbers));

