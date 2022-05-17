// Document Object Model
// DOM is an API for manipulating HTML and XML documents.
// When a web page is loaded, the browser creates a DOM of the page

// let element = document.getElementById('header')
// console.log(element.innerHTML)
// console.log(element.innerText)
// element.innerHTML = "<h1>Changed Header</h1>"
// console.log(document.getElementById('fakeid'))  // null

// let elements = document.getElementsByClassName('list')  // HTMLCollection of objects
// console.log(elements)
// console.log(elements.length)
// console.log(elements[0].innerHTML)
// console.log(document.getElementsByClassName('fakeclass'))  // blank HTMLCollection

// console.log(document.getElementsByClassName('list first'))
// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByName('user'))  // NodeList

// let content = document.getElementById('content')
// console.log(content.getElementsByTagName('input'))
// console.log(content.getElementById('userinput'))  // Error : we can't use getElementById

// console.log(document.querySelector('li.first'))  // One element
// console.log(document.querySelectorAll('li.first'))  // NodeList

// let element = document.getElementById('sayhi')
// console.log(element.parentElement)
// console.log(element.parentNode)

// let element = document.getElementById('fullname')
// console.log(element.firstElementChild)
// console.log(element.lastElementChild)
// console.log(element.children)

// let element = document.getElementById('fname')
// console.log(element.previousElementSibling)
// console.log(element.nextElementSibling)
// console.log(element.nextSibling)

// let element = document.getElementById('fullname')
// let li = document.createElement('li')
// let text = document.createTextNode('SK')
// li.appendChild(text)
// // li.appendChild('SKV')  // error
// // li.append('SKV')  // working
// li.id = 'shortname'
// li.className = 'colorRed'
// element.appendChild(li)  // can only append Node object
// // element.append(li)  // can append text object too

// let body = document.body
// console.log(body.textContent)
// body.textContent = 'Replace all content'

// let element = document.getElementById('fullname')
// let target_li = element.firstElementChild
// let li = document.createElement('li')
// let text = document.createTextNode('SK')
// li.appendChild(text)
// element.insertBefore(li, target_li)
// target_li.remove()  // remove self
// element.removeChild(li)
// let elementClone = element.cloneNode(true)  // true: full tree | false : only element
// console.log(elementClone)

// parent.replaceChild(newElement, oldElement)

// let element = document.getElementById('sayhi')
// element.insertAdjacentHTML('beforebegin', '<p>beforebegin</p>')
// element.insertAdjacentHTML('afterbegin', '<p>afterbegin</p>')
// element.insertAdjacentHTML('beforeend', '<p>beforeend</p>')
// element.insertAdjacentHTML('afterend', '<p>afterend</p>')

// let element = document.getElementById('sayhi')
// element.setAttribute('class', 'classname')  // it will replace the value
// console.log(element.getAttribute('class'))
// console.log(element.hasAttribute('class'))
// element.removeAttribute('class')

////////////// Inline Styling /////////////
// let element = document.getElementById('sayhi')
// console.log(element.style)  // CSSStyleDecLaration object
// console.log(getComputedStyle(element))  // CSSStyleDecLaration object
// console.log(getComputedStyle(element).color)  // CSSStyleDecLaration
// element.style.cssText = "background: red; padding: 20px"   // overwrite
// element.style.cssText += "background: red; padding: 20px"   // concat
// element.setAttribute('style', 'background: red; padding: 20px')
// element.style.background = 'blue'
// element.className += ' newOne another'
// console.log(element.classList)  // DOMTokenList array
// for (let classname of element.classList) {
//    console.log(classname)
// }
// element.classList.add('fff')
// element.classList.remove('fff')
// element.classList.replace('newOne', 'newTwo')
// console.log(element.classList.contains('newTwo'))
// element.classList.toggle('test')
// console.log(element.offsetHeight)
// console.log(element.offsetWidth)
// console.log(element.clientHeight)
// console.log(element.clientWidth)