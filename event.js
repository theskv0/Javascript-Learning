/////////////// DOM Events //////////////////

// let element = document.getElementById('btn')

// element.addEventListener('click', () => {})
// element.addEventListener('dblclick', () => {})
// element.addEventListener('mouseover', () => {})
// element.addEventListener('mouseout', () => {})
// element.addEventListener('mousedown', () => {})
// element.addEventListener('mouseup', () => {})
// element.addEventListener('load', () => {})
// element.addEventListener('contextmenu', () => {})  // on right click
// element.addEventListener('contextmenu', () => {})
// element.addEventListener('focus', () => {})
// element.addEventListener('blur', () => {})
// element.addEventListener('change', () => { this.value }) // it occure on blur
// element.addEventListener('input', () => {})

// element.removeEventListener('click', () => { })


/////////////// Window Events ///////////////////

// window.addEventListener('DOMContentLoaded', () => { }) // On DOM tree created
// window.addEventListener('load', () => { }) // Fully loaded
// window.addEventListener('keydown', (event) => { })
// window.addEventListener('keyup', (event) => { })
// window.addEventListener('wheel', (event) => {
//    console.log(event.deltaY < 0 ? 'up' : 'down')
//    console.log(event.deltaX < 0 ? 'left' : 'right')
// })
// window.addEventListener('scroll', () => {
//    console.log(window.pageYOffset > 150 ? '150+ down' : '150- up')
// })

/////////////// Event Bubbling & Capturing ////////////////
// false = event bubbling & true = event capturing
// window.addEventListener('scroll', () => { }, true)  // default is false

// var element = document.getElementById('link')
// element.addEventListener('click', (event) => {
//    event.preventDefault()
//    console.log(event)
// })

