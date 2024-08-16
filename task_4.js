/**
 * მოცემულია ორი "array", productNames და productPrices.
 * productNames -ში ჩაყრილია "string" -ები.
 * prdoctuPrices -ში ჩაყრილია "number" -ები.
 * ორივე "array"მ-ს ერთი და იგივე ზომა აქვთ!
 * დაწერეთ ფუნქცია, რომელიც მიიღებს 2 პარამეტრს, (productName, productPrice)
 * და დააბრუნებს HTML-ის კოდს "string" -ად შემდეგი სტრუქტურით:
 * 
 * <div>
 *      <p>Product Name</p>
 *      <p>Product Price$</p>
 * </div>
 * 
 * თითოეული ელემენტისთვის დააგენერირეთ ეს HTML კოდი და დაწერეთ "console.log" -ში მთლიანი აგებული სტრინგი.
 * ანუ ყველა პროდუქტის HTML -ი ერთ დიდ "string" -ში უნდა შეინახოთ!
 */

const productNames = ["name1", "name2", "name3", "name4"];
const productPrices = [1, 2, 3, 4];

function generateProductElement(productName, productPrice) {
    const div = document.createElement('div');
    
    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = productName;
    div.appendChild(nameParagraph);

    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = `Product Price $${productPrice}`;
    div.appendChild(priceParagraph);

    return div;
}

function generateAllProductsElements(names, prices) {
    const containerDiv = document.createElement('div');

    for (let i = 0; i < names.length; i++) {
        const productElement = generateProductElement(names[i], prices[i]);
        containerDiv.appendChild(productElement);
    }

    return containerDiv;
}

const containerElement = generateAllProductsElements(productNames, productPrices);
document.body.appendChild(containerElement);

console.log(containerElement.outerHTML);