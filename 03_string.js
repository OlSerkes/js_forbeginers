//const name = 'Aleksandra'
//console.log(typeof name)// string
//const age = 36
//function getAge(){
    //return age
//}
//const outPut = 'Hello, my name is ' + name + ' and my age is: ' + age + ' years.'
//const outPut = `Hello, my name is ${name} and my age is ${age} years.`
//const outPut = `Hello, my name is ${name} and my age is ${getAge()} years.`
//console.log(outPut)

//const outPut = `
//<div>this is div</div>
//<p>this is p</p>
//`
//console.log(outPut);
const name = 'Aleksandra'
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2))// e
console.log(name.indexOf('dra'))// 7
console.log(name.startsWith('aleksa'))//false
console.log(name.startsWith('Aleksa'))//true
console.log(name.repeat(3))

const string = '          password         '
//console.log(string.trim())//удалит проблемы в строке
//console.log(string.trimLeft())
console.log(string.trimRight())

//function logPerson(s, name, age) {
   // console.log(s, name, age)
//return 'Info about person'
//};
//const personName = 'Aleksandra'
//const personAge = 36
//const outPut = logPerson `Name: ${personName}, Age: ${personAge}!`
//console.log(outPut)

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Not birth'
    }
    console.log(s, name, age)
return `${s[0]}${name}${s[1]}${age}${s[2]}`//Name: Aleksandra, Age: 36!
};
const personName = 'Aleksandra'
const personName2 = 'Sasha'
const personAge = 36
const personAge2 = -10
const outPut = logPerson `Name: ${personName}, Age: ${personAge}!`
const outPut2 = logPerson `Name: ${personName2}, Age: ${personAge2}!`
console.log(outPut)
console.log(outPut2)
