/**
 * დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს "array" -ს.
 * ამ ფუნქციამ უნდა იპოვოს გადაცემულ "array" -ში რამდენი ისეთი "string" -ია, რომელიც შეიცავს
 * დიდ ასოს.
 * 
 * მაგალითი:
 * const someArray = ["String", "string", "StRing"];
 * 
 * შედეგი:
 * 2 (რადგან, ორი ისეთი "string" -ია, რომელიც დიდ ასოს შეიცავს)
 * 
 * კითხვა:
 * აქვს თუ არა თქვენ მიერ დაწერილი ფუნქციას side effect -ი?
 */

const someArray = ["String", "string", "StRing"];

function hasCaps(str) {
    return /[A-Z]/.test(str);
}

function countCaps(inputArray) {
    const count = inputArray.reduce((acc, str) => acc + hasCaps(str), 0);
    console.log(count);
}

countCaps(someArray);