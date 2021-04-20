//1 Переменные
//var name = 'Aleksandra' - не использовать
//const firstName = 'Aleksandra';
//const lastName = 'Serkes'; //- предпочтительно использовать, string
//let age = 36; //number
//const isProgrammer = true; //boolean
//const _private = 'private'
//const $ = 'some vallue'
//const if = 'fjkdhjfb'//error
//const withNum5 = 5
//const 5withNum = 5//error
//2 Мутирование
//console.log('Имя человека ' + firstName + ', а возраст человека ' + age)
//console.log(age.toString())//вернет значение как строку
//console.log(age)//вернет значение как число
//alert('Имя человека ' + firstName + ', а возраст человека ' + age)//выведет всплывающее окно в браузере
//prompt('Введите фамилию')//выведет окно, в которое пользователь должен будет ввести свои данные
 
//const lastName = prompt('Введите фамилию');
//alert(firstName + ' ' + lastName)

//3 Операторы
//let currentYear = 2021
//const birthYear = 1984
//const age = currentYear-birthYear
//console.log(age)
//console.log(++currentYear)

//4 тип данных
//const isProgrammer = true
//const name = 'Aleksandra'
//const age = 36
//console.log(typeof isProgrammer)//выведет boolin
//console.log(typeof name)//string
//console.log(typeof age)//numb
//let x
//console.log(typeof x)//undefind
//console.log(typeof null)//object

//Приоритет операторов
//const fullAge = 36
//const yearOfBirth = 1984
//const currentYear = 2021
//const isFullAge = currentYear - yearOfBirth >= fullAge //36 - true
//console.log(isFullAge)

//Условные операторы
const courseStatus = 'pending'// ready, fail, pending
if (courseStatus === 'ready') {
    console.log('Курс готов, можно проходить')
} else if (courseStatus === 'pending') {
    console.log('Курс в стадии разработки')
} else {
    console.log('Курс не получился')
}

const isReady = false
//if (isReady) {
    //console.log('Everything is ready')
//} else {
    //console.log('Anything are not ready')
//}
//Тернарное выражение
//isReady ? console.log('Everithing is ready') : console.log('Anything are not ready')//the same as if/else

//7 Булевая логика
//&& || ! - возвращает true or false

//8 Функции
function calculateAge(year) {
    return 2021 - year
}

//const myAge = calculateAge(1984)
//console.log(myAge) // or
//console.log(calculateAge(1984))

function logInfoAbout(name, year) {
const age = calculateAge(year)
console.log('Человек по имени ' + name + ' имеет возраст ' + age)
}
logInfoAbout('Aleksandra', 1984)

//9 Массивы
//const cars = ['Mazda', 'Mercedes', 'Ford']//правильный вариант
//const cars = new Array('Mazda', 'Mercedes', 'Ford')
//console.log(cars)
//console.log(cars[1])
//console.log(cars.length)
//cars[0] = 'Porshe'
//console.log(cars[0])
//cars[3] = 'Mazda'
//console.log(cars)

//10 Цыклы
const cars = ['Mazda', 'Mercedes', 'Ford']
//for (let i = 0; i < cars.length; i++) {
    //const car = cars[i];
    //console.log(car)
//}

for (let car of cars) {
    console.log(car)
}

//11 Объекты
const person = {
    firstName: 'Aleksandra',
    lastName: 'Serkes',
    year: 1984,
    languages: ['ru', 'ua', 'en', 'pl'],
    hasHusband: false,
    greet: function() {
        console.log('greet')
    },
}
console.log(person.firstName)
console.log(person.languages[1])
console.log(person['lastName'])
//console.log(person.greet())
person.greet()
const key = 'languages'
console.log(person[key])
person.hasHusband = true
console.log(person.hasHusband)
person.isProgrammer = true
console.log(person)