// primitive 

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const str = "Hello, World!"
const num = 42
const bool = true

let userEmail

const Id = Symbol("123")
const anotherId = Symbol("123")

console.log(Id === anotherId) 

// Reference (non-primitive)

// 3 types : Object, Array, Function

const heros = ["Shaktiman", "Baalveer", "Doremon"]

const myObj = {
  name: "Kanishk",
  age: 18,
  isAdmin: true,
}

const myFunction = function () {
  console.log("Hello from myFunction")
}

myFunction()

/* Undefined -----> undefined
    Null -----------> object    
    BigInt ---------> bigint
    Symbol ---------> symbol
    Number ---------> number */


