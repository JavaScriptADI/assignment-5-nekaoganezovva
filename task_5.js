/**
 * დაწერეთ ფუნქცია, რომელიც "string" -ების "array" -ში დათვლის საშუალოდ რა ზომის "string" -ებია
 */

function avLength(stringsArray) {
    if (stringsArray.length === 0) {
        return 0;
    }

    const totalLength = stringsArray.reduce((sum, str) => sum + str.length, 0);
    return totalLength / stringsArray.length;
}

// Example usage
const exampleArray = ["qwertyuiop", "qwertyu", "qwert", "qwe"];
const averageLength = avLength(exampleArray);

console.log(averageLength);