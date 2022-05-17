// Browser Object Model

// All global objects, functions, and variables with the var keyword automatically become members of the window object

// window is the default object of browser

// var x = 5
// console.log(window.x)

// function fun() {
//    console.log('fun')
// }
// window.fun()

///////// default methods ///////////
// alert()
// prompt()

// console.log(window.innerHeight, window.innerWidth)  // height, width of body
// console.log(window.outerHeight, window.outerWidth)  // height, width of browser

// let element1 = document.getElementById('windowOpen')
// let element2 = document.getElementById('windowClose')
// let newWindow
// element1.addEventListener('click', () => {
//    // window.open(url, target, features)
//    newWindow = window.open('http://localhost/', 'Local', 'height=500,width=500')
// })
// element2.addEventListener('click', () => {
//    newWindow.close()
// })

// let workId = setTimeout(() => {
//    console.log('after 2 seconds')
// }, 2000)
// clearTimeout(workId)

// let workId = setInterval(() => {
//    console.log('2 seconds')
// }, 2000)
// clearInterval(workId)


///////////// Location ///////////////
// sub object of window object
// console.log(window.location)
// console.log(location.href)
// console.log(location.pathname)
// console.log(location.protocol)
// let element = document.getElementById('redirect')
// element.addEventListener('click', () => {
//    location.assign('https://google.com')  // it's mentain history
//    // location.replace('https://google.com')  // it's not mentain history
//    // location.reload()
// })


// console.log(window.navigator)
// console.log(window.navigator.appName)
// console.log(window.navigator.appVersion)
// console.log(window.navigator.appCodeName)
// console.log(window.navigator.cookieEnabled)
// console.log(window.navigator.userAgent)
// console.log(window.navigator.platform)

// console.log(window.screen)
// console.log(window.screen.height)
// console.log(window.screen.width)
// console.log(window.screen.colorDepth)
// console.log(window.screen.orientation)