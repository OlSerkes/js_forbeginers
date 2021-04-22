//Event loop
const timeout = setTimeout (() => {
    console.log('After Timeout')
}, 2500)
clearTimeout(timeout)//можем чистить функцию timeOut

const interval = setInterval (() => {
    console.log('Afrer Timeout')
}, 1000)
clearInterval(interval)

//const delay = (callback, wait = 1000) => {//создаем свою функцию, в которой задаем интервал вывода информации
  //  setTimeout(callback, wait)
//}
//delay (() => {
 //   console.log('After 2 seconds')
//}, 2000)

//Promiss - более удобный способ асинхронности
const delay = (wait = 1000) => {
    const promise = new Promise ((resolve, reject) => { //new Promise - глобальный класс, в конструктор передается callback. Функция принимает в себя два парметра резолв и реджект
    setTimeout (() =>{
        reject('Что-то пошло не так')//либо resolve() - если все ок
    }, wait)
})
return promise
}
//delay (2500)
   // .then(() => {
   // console.log('After 2 seconds')
//}) //метод для promise, который принимает в себя коллбек
   // .catch(err => console.error(err))//метод для promise, который принимает в себя коллбек, попадаем ,если произошла ошибка
   // .finally(() => console.log('Finally'))//метод для promise, который принимает в себя коллбек

    const getData = () => new Promise(resolve => resolve([
        1, 1, 2, 3, 5, 8, 13
    ]))
    getData().then(data => console.log(data))//выведет индекс массива и сам массив

//Новый синтаксис, который не работает с колбеками (нет надобности в методах then, catch, finally)
    //async function asyncExample() {
      // await delay(3000)
      // const data = await getData()// getData возвращает promisse
      // console.log('Data', data)
   // }
   // asyncExample()

    //если есть какая-то ошибка функцию можно переписать так
    async function asyncExample() {
        try {
            await delay(3000)
            const data = await getData()// getData возвращает promisse
            console.log('Data', data)
        } catch (e) {
            console.log(e)
        } finally {
            console.log('Finally')
        }       
     }
     asyncExample()