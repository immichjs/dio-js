let name = 'Mich'
let age = 20
let currentYear = new Date().getFullYear()

let phrase = 'Japão é o melhor time do mundo'

console.log(name)
console.log(currentYear - age)

console.log(phrase.replace('Japão', 'Brasil'))
console.log(phrase.toLowerCase())
console.log(phrase.toUpperCase())

let fruits = ['Maçã', 'Pêra', 'Laranja']
console.log(fruits[1])

fruits.push('Uva')
console.log(fruits)

console.log(fruits.pop())

console.log(fruits.reverse())
console.log(fruits.toString())
console.log(fruits.join())

const objFruits = {
    fruit: 'Maçã',
    colorFruit: 'Red'
}

console.log(objFruits.fruit)

alert(fruits[0], objFruits.fruit)

age = Number(prompt('Digite idade: '))

if (age >= 18) {
    alert('Maior')
} else {
    alert('Menor')
}

let count = 0

while (count < 5) {
    console.log(count)
    count++
}

for (count = 0; count <= 5; count++) {
    console.log(count)
}

let date = new Date()
alert(date.getMonth())

function soma (n1, n2) {
    return n1 + n2
}

alert(soma(5, 10))

function setReplace(phrase, name, newName) {
    return phrase.replace(name, newName)
}

alert(setReplace('Vai Japão', 'Japão', 'Brasil'))

function validadeAge (age) {
    let validate
    if (age >= 18) {
        return validate = true
    } else {
        return validate = false
    }
}

age = Number(prompt('Digite idade: '))
console.log(validadeAge(age))
