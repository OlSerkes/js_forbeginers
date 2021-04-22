const person = {
    name: 'Aleksandra',
    age: 36,
    programmer: true,
    languages: ['ru', 'ua', 'en', 'pl'],
    'complex key': 'Complex Value',
    ['key_' + (1 + 3)]: 'Computed key',//в консоли ['key_' + (1 + 3)] - будет как key_4
    greet() {
    console.log('greet from person')
    },
    info () {
        console.info('Information about person name of', this.name)//this = person
    }
    }

//console.log(person.name)
//console.log(person['age'])
//console.log(person['complex key'])//конструкция для динамических ключей
//console.log(person)
//person.greet()//вызываем метод greet

//person.age++//изменился возраст
//person.languages.push('it')//добавили один язык в массив
//person['key_4'] = undefined//если хотим скрыть значение из массива
//console.log(person)
//console.log(person['key_4'])
//delete person['key_4']//удалили ключ из массива

//Новый синтаксис - деструктуризация
//const name = person.name
//const age = person.age
//const languages = person.languages

const {name, age, languages} = person
console.log(name, age, languages)

for (let key in person) {
    console.log(key)
}//получим перечень ключей без значений
for (let key in person) {
    if (person.hasOwnProperty(key)){
    console.log('key:', key)
    console.log('value:', person[key])//выведет ключ и его значение
}
}// тоже самое, но без циклов можно сделать обратившись к глобальному Object

const keys = Object.keys(person)
console.log(keys)//получили массив

Object.keys(person).forEach( (key) => {
    console.log('key:', key)
    console.log('value:', person[key])
})

//Context

person.info()

//const logger = {
   // keys() {
   //     console.log('Object.keys:', Object.keys(this))
   // }
//}
//const bound = logger.keys.bind(person)//присоединили к logger, который не знает о person, все данные с помощью функции bind
//bound()// или можем воспользоваться др.методом
//logger.keys.call(person)

const logger = {
    keys() {
        console.log('Object.keys:', Object.keys(this))
    },
    keysAndValue() {
        Object.keys(this).forEach(key => {
            console.log(`'${key}':${this[key]}`)
        })
    }
}
logger.keysAndValue.call(logger)
logger.keysAndValue.call(person)//передаст информацию по объекту


