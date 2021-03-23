// Создайте страницу, которая отобразит сообщение «Я JavaScript!».

let i = "Я";
const lang = "JavaScript";

alert(i +" "+ lang);


// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).

const name = "Джон";
let admin = name;
// Функция для Типа задержки времени
function sayHi() {
  alert(admin);
}

setTimeout(sayHi, 1000);

// Что выведет этот скрипт 

let firstName = "Ilya";

alert( `hello ${1}` ); // ? // Hello 1

alert( `hello ${"firstName"}` ); // ? // Hello fistName

alert( `hello ${firstName}` ); // ? // Hello Ilya