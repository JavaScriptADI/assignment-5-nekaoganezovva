/**
 * მოცემულია "string" -ების "array" -ი.
 * დაწერეთ კოდი, რომელიც ამ "array" -ში იპოვის ყველაზე მოკლე სიგრძის მქონე
 * "string" -ს და შემდგომ გამოიტანეთ ამ ელემენტის ზომა, მნიშვნელობა და რომელ ინდექსზეა ის
 * "console.log"-ის გამოყენებით
 */

const newArray = ["Andy", "Benjamin", "Cameron", "Dan"];

// Find the shortest string
let shortestString = newArray[0];
let shortestIndex = 0;

for (let i = 1; i < newArray.length; i++) {
    if (newArray[i].length < shortestString.length) {
        shortestString = newArray[i];
        shortestIndex = i;
    }
}

// result
console.log("Length:", shortestString.length);
console.log("Value:", shortestString);
console.log("Index:", shortestIndex);