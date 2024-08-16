/**
 * დაწერეთ კოდი, რომელიც მომხმარებელს "prompt" ფუნქციის გამოყენებით
 * შემოატანინებს 10 სახელს და შეინახეთ ეს მნიშვნელობები "array" -ში.
 */

const newArray = [];

for (i = 0; i < 10; i++) {
    let names = prompt('what is your name? ${i + 1}');
    newArray.push(names);
}

console.log(newArray);