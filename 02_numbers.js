//1 Number
//const num = 42//integer
//const float = 42.42//float
//const pow = 10e3//
//console.log(pow)

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53', Math.pow(2, 53)-1)//MAX_SAFE_INTEGER
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('2/0', 2/0)//infinity
console.log(Number.NaN)//Not a number
console.log(typeof NaN)
const wierd = 2/undefined
console.log(Number.isNaN(wierd))
console.log(isFinite(Infinity))//false - конечна ли безконечность
console.log(isFinite(42))//true - конечно ли число 42

const stringInt = '42'
const stringFloat = '42.42'
console.log(stringInt + 2) //=422
console.log(parseInt(stringInt) + 2)//=44
console.log(+stringInt + 2)//=44

console.log(parseInt(stringFloat) + 2)//=44
console.log(parseFloat(stringFloat) + 2)//=44.42
console.log(+stringFloat + 2)//=44.42

console.log(0.4 + 0.2)//=0.6000000000000001
console.log((0.4 + 0.2).toFixed(4))//=0.6000 - as a string
console.log(parseFloat((0.4 + 0.2).toFixed(1)))//=0.6 - as a number

//2 BigInt
console.log(Number.MAX_SAFE_INTEGER)
console.log(typeof 900719925474099199999n)//bigInt
console.log(900719925474099199999n - 9007199254740991999n)//=891712726219358208000n
console.log(- 9007199254740991999n)//-9007199254740991999n
//console.log(10n - 4)//error
console.log(parseInt(10n)-4)//=6
console.log(10n - BigInt(4))//=6n
console.log(5n / 2n)//=2n

//3 Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(25))//=5 - квадратный корень
console.log(Math.pow(5, 2))//=25 - возведение в степень
console.log(Math.max(42, 15, 23, 89, 125))// 125
console.log(Math.min(42, 15, 23, 89, 125))// 15
console.log(Math.floor(4.9))//=4
console.log(Math.ceil(4.9))//=5
console.log(Math.trunc(4.9))//=4
console.log(Math.round(4.9))//=5
//console.log(Math.random())

//4 Example
function getRandomBtween(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(getRandomBtween(10, 42))