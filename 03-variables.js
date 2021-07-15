// Variables are ways to store information in-memory in Javascript

/*
	Variables can be instantiated/stored in 2 way:
	let - for variables that need to change over time
	const - for constant variables that never change

	Variables use to be defined using 'var'.
	You may see this elsewhere when looking at code.
	It stills works and is similar to var but is considered outdated.
 */

const myName = 'Mickey Mouse'
let myAge = 32

myAge = myAge + 9
// myName = 'Minnie Mouse'

// Plus signs can be used to concatenate sentences.
// If an integer is concatenated with a string, the whole thing will default to a string
console.log('My name is ' + myName + ' and I am ' + myAge + ' years old.')
