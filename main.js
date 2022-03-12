// 1 Задание

let user = []; 
let n = 10;
for (let i = 1; i <= n; i++) {
    let list = prompt(`Введите имя и возраст пользователя с id:${i}\nНапример:\nУткур 40`).split(" ");
    let person = { name: list[0], age: +list[1] };
    user.push(person);
}

let a = "";
for (let i = 1; i <= n; i++) {
    let person = user[i - 1];
    a += `Пользователь ${i}
Имя ${person.name}
Возраст ${person.age}

`;
}
console.log(a + JSON.stringify(user));



// 2 Задание

let obj = receipt();
let delivery = 9000; 
let sum = delivery;
let menu = [];
for (let key in obj) {
    menu.push(`${key} ${obj[key].info}`);
    sum += obj[key].price;
}
console.log(`Вы заказали ${menu.join()} | Общая стоимость ${sum} сум с доставкой (${delivery} сум)`);
console.log('Спасибо за покупку');

