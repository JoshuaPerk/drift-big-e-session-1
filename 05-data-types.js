// Different types of information/variables are stored different ways

// In Javascript, the keyword 'typeof' will return the data type of the variable or value that comes next
console.log(typeof 10) // returns Number
console.log(typeof 1.5) // returns Number
console.log(typeof 3.14159) // returns Number
console.log(typeof (5 + 9)) // returns Number


console.log(typeof "Hello there") // returns String
console.log(typeof ("Hello there" + 5)) // returns String
console.log(typeof "") // returns String


let myVariable;
console.log(typeof myVariable) // returns Undefined


const person = {
	firstName: 'Nick',
	lastName: 'Masters',
	currentCompany: 'Drift.com',
	favoriteNumber: 56
}
console.log(typeof person) // returns Object
console.log(typeof person.favoriteNumber) // returns Number


const fruit = [
	'apple',
	'orange',
	'grapes',
	'banana'
]
console.log(typeof fruit) // returns Object
console.log(fruit instanceof Array) // returns True
console.log(typeof fruit[0]) // returns String