// Variables all have different ways thet can be manipulated (called methods).

/*
	Take an array. After you define it, you might want to:
		- Select an item from the list
		- Add an item to the list
		- Remove an item from the list
		- Count the number of items in the list
 */

// Notice it's constant?
const fruit = [
	'apple',
	'orange',
	'grapes',
	'banana'
]

// Since Arrays don't have keys (like Objects do), you have to use an index number to select an item
// In Javascript indecies starts at "0"

// Selecting an item from an array
console.log('Getting something:', fruit[2])

// Add an item to an array
fruit.push('tangerines')
console.log('Added something:', fruit)

// Remove an item from an array
fruit.splice(2, 1)
console.log('Removed something:', fruit)

// Count the number of items in the list
console.log('The number of things:', fruit.length)