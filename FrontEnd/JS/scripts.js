// String DataType
let welcome = "Hello World"
let name = "Ahmed"
console.log(welcome + " " + "Tanvir"[0])
console.log("First letter: " + name[0])
console.log("first letter: " + "Ahmed"[4])
console.log("first letter: " + name[name.length - 1])
console.log(name[3])

console.log("length of welcome: " + welcome.length)


// Number -> DataType

// null & undefined
let string    // it will be undefined
console.log(string)

string = null // intentionally defined null
console.log(string)


// NaN -> Not a Number
console.log("name" * 3)    // output will be NaN



// Creating Variables (let, const)
let userName = "Sheikh Tanvir Ahmed"
const id = "0112230191"

console.log(userName)
console.log(id)

// id = "121"  -> will throw error

let num = 3
num++;
console.log(num)

// Currency Converter
let USD = 1200;
let AUS = USD * 1.5;
console.log("AUS Currencey: " + AUS);

// == vs ===
let str = "5"
let num1 = 5
console.log(str == num1)   // -> output: true
console.log(str === num1)  // => output: false (checks value + datatype)



// document.querySelector('body').style.backgroundColor = 'red'