let but = document.getElementById('but');
let img = document.getElementById('car-img');
let brand = document.getElementById('brand');
let model = document.getElementById('model');
let year = document.getElementById('year');

const car = { brand: 'Audi', model: 'Q5', year: '2008', srcImg: 'https://cdn.izap24.ru/images/prodacts/sourse/228623/228623450_dver-pravaya-zadnyaya-audi-q5-80a-restayling-sportback-ly9t.jpg' }

but.onclick = f1

function f1() {
    brand.textContent = car.brand;
    model.textContent = car.model;
    year.textContent = car.year;
    img.setAttribute('src', car.srcImg);
}


let out1 = document.getElementById('out1');
let out2 = document.getElementById('out2');
let out3 = document.getElementById('out3');
let but2 = document.getElementById('but2');

const products = [{ name: 'Банан', quantity: 3, price: 65 },
{ name: 'Яица', quantity: 1, price: 120 },
{ name: 'Печенье овсяное', quantity: 1, price: 350 },
{ name: 'Йогурт', quantity: 4, price: 70 },
{ name: 'Огурцы', quantity: 2, price: 120 },
{ name: 'Черешня', quantity: 1.5, price: 170 }]

but2.onclick = f2

function f2() {
    let cheque = '';
    let total = 0;

    for (var i = 0; i < products.length; i++) {
        var name = products[i].name;
        var price = products[i].price;
        var quantity = products[i].quantity;
        cheque += name + " -- " + quantity + " -- " + price + " ₽" + "\n"
    }
    out1.innerText = cheque

    for (var i = 0; i < products.length; i++) { total += products[i].price * products[i].quantity }
    out2.innerHTML = "Общая сумма покупки: " + total + " ₽";

    let max = products.reduce((prev, cur) => {
        if (prev.quantity * prev.price > cur.quantity * cur.price) {
            return prev
        }
        return cur
    })

    out3.innerHTML = "Самая дорогая покупка в чеке: " + max.name + ' -- ' + max.quantity + ' -- ' + max.price + " ₽";
}
