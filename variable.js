// var _hello = 'hello'
// let $hello = 'hello'
// var a;   // default value is undefined
// // const x  // error

// console.log(typeof a)   // undefined
// console.log(`Hello ${$hello}`)   // template literals


//////// Hoisting /////////
// move all decleariation part on top of the scope
// let, const cannot initialize by default undefined while var initialize with undefined

// hello() // Hello
// function hello() {
//    console.log('Hello')
// }

// let x
// console.log(x) // undefined
// x = 5

// console.log(x) // undefined
// var x = 5

// console.log(x) // Error: cannot use before initialization
// let x = 5

// console.log(x) // Error: cannot use before initialization
// const x = 5

// x = 5  // js will automaticaly deleare this variable
// console.log(x) // 5

// console.log(x) // x is not defined
// x = 5

//////// Strict Mode //////
"use strict"