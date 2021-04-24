const heading = document.getElementById('hello')//возвращает ссылку на объект в дом-дереве
console.dir(heading)//откроет сам объект и покажет его свойства
console.dir(heading.textContent)//получим доступ к тексту
//const heading2 = document.getElementsByTagName('h2')//лучше не пользоваться этим способом, старый и медленный
//const heading2 = document.getElementsByClassName('h2-class')[0]
//console.log(heading2)
//const heading2 = document.querySelector('h2-class')//в скобках можно добавлять по тегу, классу, id
const heading2 = document.querySelector('#sub-hello')//querySelector возвращает всегда один элемент, первый попавший
console.dir(heading2)
//const heading3 = heading2.nextElementSibling//получим доступ к следующему h2
const h2List = document.querySelectorAll('h2')//выберем все заголовки h2
//console.log(h2List)
const heading3 = h2List[h2List.length-1]
console.log(heading3)


//setTimeout (() => {
   // heading.textContent = 'Changed from JavaScript'
   // heading.style.color = 'red'//с помощью JS поменяли цвет текста
   // heading.style.textAlign = 'center'
   // heading.style.background = 'black'
   // heading.style.padding = '2rem'
//}, 1500)

//setTimeout (() => {
   //    addStylesTo(heading)
//}, 1500)
//setTimeout (() => {
   //    addStylesTo(heading2)
//}, 4500)
//setTimeout (() => {
   //    addStylesTo(heading3)
//}, 3000)
//function addStylesTo(node) {
    //node.textContent = 'Changed from JavaScript'
    //node.style.color = 'red'
    //node.style.textAlign = 'center'
    //node.style.background = 'black'
    //node.style.padding = '2rem'
//}

setTimeout (() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()//отмена перехода по ссылке
    console.log('Click on link', event.target.getAttribute('href'))//event.target покажет в консоли по какой ссылке надо перейти
    const url = event.target.getAttribute('href')
    window.location = url//происходит переход по ссылке, но открывается в этом же окне
})
//setTimeout (() => {
   // addStylesTo(heading3.children[0], 'Let\'s practice more', 'yellow')//добавили переход по ссылке на др.страницу
//}, 3000)
setTimeout (() => {
    addStylesTo(link, 'Let\'s practice more', 'yellow')
}, 3000)
setTimeout (() => {
    addStylesTo(heading2, 'And everethyng will be great!', 'blue', '2rem')
}, 4500)
function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'

    //folsy: undefined, '', null, 0, false 
    if (fontSize) {
       node.style.fontSize = fontSize
    }
}
//https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {// по клику на хединг меняется цвет фона и текста
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = "#fff"
    }else{
        heading.style.color = 'red'
        heading.style.backgroundColor = "#000"  
    }
}
//второй способ
heading2.addEventListener('dblclick', () => {//содержит два обязательных параметра: строка и функция
    if (heading2.style.color === 'blue') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = "#fff"
    }else{
        heading2.style.color = 'blue'
        heading2.style.backgroundColor = "#000"  
    }
})





