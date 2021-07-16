const jokes = [
	'Past, present, and future walked into a bar.... It was tense.',
	'Why are fish easy to weigh? Because they have their own scales.',
	'A horse walks into a bar. The bar tender says "Hey." The horse says "Sure."',
	'How does Darth Vader like his toast? On the dark side.',
	'What does a clock do when it\'s hungry? It goes back four seconds!',
	'Did you hear that the police have a warrant out on a midget psychic ripping people off? It reads “Small medium at large.”',
	'I\'ll tell you what often gets over looked... garden fences.',
	'I met this girl on a dating site and, I don\'t know, we just clicked.',
	'What did the Dorito farmer say to the other Dorito farmer? Cool Ranch!',
	'Someone broke into my house last night and stole my limbo trophy. How low can you go?'
]

for (let i = 0; i < 5; i++) {
	console.log('A random number:', Math.random());
}

for (let i = 0; i < 5; i++) {
	console.log('A rounded random number:', Math.floor(Math.random()));
}

for (let i = 0; i < 5; i++) {
	console.log('A rounded random number, multiplied:', Math.floor(Math.random() * 100));
}

const randomNumber = Math.floor(Math.random() * jokes.length);
const randomJoke = jokes[randomNumber]
console.log(randomJoke)
