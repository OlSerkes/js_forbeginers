const cars = ['Mazda', 'Ford', 'BMV', 'Mercedes']
//const people = [
    //{name: 'Aleksanra', budget: 4200},
   // {name: 'Elena', budget: 3500},
    //{name: 'Victoria', budget: 2300}
//]
const fib =[1, 1, 2, 3, 5, 8, 13]
console.log(cars)

//Function
function addItemToEnd() {

}

//Method
cars.push('Porshe')//добавит в конец массива
//console.log(cars)
//cars.unshift('Renault')//добавит в начало массива
//console.log(cars)
//cars.shift()//удалит из начала массива
//const firstItem = cars.shift()
//const lastCar = cars.pop()//удалит из конца массива
//console.log(firstItem)
//console.log(lastCar)
//console.log(cars)

//console.log(cars.reverse())//меняет порядок элементов в массиве

//задача 1
//const text = 'Hello, we are learning Java Script'
//const reverseText = text.split(' ').reverse().join(' ')//split - сделает из строки массив, reverse - поменяет порядок слов в массиве, join -преобразует массив в строчку
//console.log(reverseText)

//const index = cars.indexOf('BMV')
//cars[index] = 'Porshe'
//console.log(cars)

//const index = people.findIndex(function(person){
//return person.budget === 3500
//})
//console.log(people[index])

//const person = people.find(function(person){
   // return person.budget === 3500
//})
//console.log(person)

//let findedPerson 
//for (const person of people) {
        //if (person.budget === 3500){
        //findedPerson = person
   // }
//}
//console.log(findedPerson)

//const person = people.find(person => person.budget === 3500)
//console.log(person)

//console.log(cars.includes('Mazda'))//поиск значения в массиве

const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})
console.log(upperCaseCars)

const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)//or
//const pow2Fib = fib.map(num => num ** 2)
//console.log(pow2Fib)
//const sqrt = num => Math.sqrt(num)
//const pow2Fib = fib.map(pow2).map(sqrt)
const filteredNumbers = pow2Fib.filter(num => num > 20)//отфильтрует значения больше 20 из массива
console.log(pow2Fib)
console.log(filteredNumbers)

const people = [
    {name: 'Aleksanra', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 2300}
]
//const allBudget = people.reduce((acc, person) => {
   // if (person.budget > 3000) {
        //acc += person.budget
    //}
//return acc
//}, 0)//or
const allBudget = people
.filter(person => person.budget > 3000)
.reduce((acc, person) => {
acc += person.budget
return acc
}, 0)
console.log(allBudget)