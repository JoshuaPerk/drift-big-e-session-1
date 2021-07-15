// Different types of information/variables are stored different ways

// In Javascript, the keyword 'typeof' will return the data type of the variable or value that comes next
console.log(1, typeof 10) // returns Number
console.log(2, typeof 1.5) // returns Number
console.log(3, typeof 3.14159) // returns Number
console.log(4, typeof (5 + 9)) // returns Number


console.log(5, typeof "Hello there") // returns String
console.log(6, typeof ("Hello there" + 5)) // retuns String
console.log(7, typeof "") // returns String


let myVariable;
console.log(8, typeof myVariable) // returns Undefined


const person = {
	firstName: 'Nick',
	lastName: 'Masters',
	currentCompany: 'Drift.com',
	favoriteNumber: 56
}
console.log(9, typeof person) // returns Object
console.log(10, typeof person.favoriteNumber) // returns Number


const fruit = [
	'apple',
	'orange',
	'grapes',
	'banana'
]
console.log(11, typeof fruit) // returns Object
console.log(12, fruit instanceof Array) // returns True
console.log(13, typeof fruit[0]) // returns String
