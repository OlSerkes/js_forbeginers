//1 Functon
//Function declaration
function greet(name){
    console.log('Hello - ', name)
}

//Function expression
const greet2 = function(name2){
    console.log('Hello - ', name2)
}
//greet('Sasha')
//greet2('Shura')
console.log(typeof greet2)

//2 Анонимные функции
let counter = 0
const interval = setInterval (function() {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)

//3 Стрелочные функции
function greet(name) {
    console.log('Hello - ', name)
}
const arrow = (name) => {
    console.log('Hello - ', name)
}
arrow('Aleksandra')//or 
const arrow2 = name => console.log('Hello - ', name)
arrow2('Aleksandra')


const pow = num => {
    return num ** 2
}
console.log(pow(5))// or
const pow2 = num => num ** 2
console.log(pow2(5)) 

//Параметры по умолчанию
const sum = (a, b = 1) => a + b //b - параметр, заданный по умолчанию
console.log(sum(41))

function sumAll(...all){
    let result = 0
    for (let num of all) {
        result +=num
    }
    return result
}
const res = sumAll(1, 2, 3, 4, 5, 6, 7)
console.log(res)

//Замыкания
function createMember(name) {
    return function (lastName){
        console.log(name + lastName)
    }
}
const logWithLastName = createMember('Aleksandra')
console.log(logWithLastName)
console.log(logWithLastName('Serkes'))
console.log(logWithLastName('Ivanova'))

