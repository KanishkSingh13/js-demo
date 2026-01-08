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






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive) vs heap(reference)

let channelname= "CodeWithKanishk"
let anotherChannelname= channelname

anotherChannelname= "KanzCodes"

console.log(channelname)
console.log(anotherChannelname)

let user1 = {
    email: "kanishksingh07.13@gmail.com",
    upiID: "kanishk@oksbi",
}

let user2 = user1

user2.email = "kanz@gmail.com"

// both user1 and user2 will reflect the change as both are pointing to the same object in heap memory

console.log(user1.email)
console.log(user2.email)

