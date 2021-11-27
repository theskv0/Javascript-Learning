// let user = {
//    name: 'Sumit',
//    addr: null
// }
// user.age = 25
// console.log(user)
// console.log(user.name)
// console.log(user['name'])
// delete user.age
// console.log(user)
// console.log('addr' in user)

// // forin loop
// for (let key in user) {
//    console.log(key, user[key])
// }

// let user = {
//    name: 'Sumit',
//    age: 25,
//    addr: 'Abc',
//    sayName: function () {
//       console.log(this.name)
//    },
//    sayAddr: () => {
//       console.log(this.name)
//    },
//    sayAge() {
//       console.log(this.age)
//    }
// }

// user.sayName() // Sumit
// user.sayAddr() // empty string
// user.sayAge() // 25


/////////////// Math Object /////////////

// console.log(Math.PI)
// console.log(Math.round(4.5)) // 5  --  roundoff
// console.log(Math.ceil(4.5)) // 5  --  max rounded vlaue
// console.log(Math.floor(4.5)) // 4  --  min rounded value
// console.log(Math.trunc(4.1)) // 4  --  remove digits after point 
// console.log(Math.pow(5, 2)) // 25 
// console.log(Math.sqrt(100)) // 10 

// let arr = [1, 4, 6, 0.1]
// console.log(Math.min(...arr)) // 0.1
// console.log(Math.max(...arr)) // 6

// console.log(Math.random()) // between 0 and 1
// console.log(Math.floor(Math.random() * 10) + 1) //  1 - 10
// console.log(Math.floor(Math.random() * (26 - 5) + 5)) //  5 - 25


/////////////// Math Object /////////////

// let x = new Date()  // current date and time
// let x = new Date(2018, 2, 1, 09, 00, 00) // (y, m, d, h, i, s)
// let x = new Date(2018, 2) // y and m is required
// let x = new Date(2018) // Thu Jan 01 1970 05:30:02 GMT+0530 (India Standard Time)
// console.log(x)

// let x = new Date("October 13, 2018 20:29:78")
// console.log(x.getDay())
// // x.setTime()
// console.log(x.getTime())
// x.setFullYear(2021)
// console.log(x.getFullYear())
// x.setMonth(0)
// console.log(x.getMonth())
// x.setDate(5)
// console.log(x.getDate())
// x.setHours(3)
// console.log(x.getHours())
// x.setMinutes(45)
// console.log(x.getMinutes())
// x.setSeconds(25)
// console.log(x.getSeconds())
// x.setMilliseconds(99)
// console.log(x.getMilliseconds())

// let x = new Date()
// x.setDate(x.getDate() + 1)
// console.log(x)

// let person = new Object()
// person.name = 'sumit'
// console.log(person)

// let person = {
//    name: 'Sumit',
//    age: 25,
//    get getName() {      // getter
//       return this.name.toUpperCase()
//    },
//    set setName(name) {  // setter
//       this.name = name
//    }
// }
// person.setName = 'Sumit Verma'
// console.log(person.getName)

// // object constructor function
// function Student(name, age) {
//    this.name = name
//    this.age = age
// }
// let rohan = new Student('Rohan', 12)
// console.log(rohan)
// // Object prototype
// Student.prototype.nationality = 'Indian'
// let shyam = new Student('Shyam', 15)
// console.log(shyam)