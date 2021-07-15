const express = require('express') // A framework for web applications (handles URLs, responses, APIs, errors, middleware, etc.)
const ngrok = require('ngrok'); // A tunnel library to host your local application to the world
const app = express() // Instantiate your app
const port = 3000 // Define the port your app should be available on

app.get('/', function (req, res) {
	res.send('Welcome to the home page!')
});

app.get('/hello', function (req, res) {
	let favoriteNumber = 5
	favoriteNumber = favoriteNumber * 2
	res.send('Oh, hey there! My favorite number is ' + favoriteNumber)
});

// Add a route available @ /joke which takes an array of jokes, picks a random one and returns it to the page
/*
	Hint:
	Instead of 'res.send' which returns basic text, we want to return JSON since we're building an API

	Your route should end with something like this:
	res.json({
		result: randomJoke
	});
*/

app.listen(port, function () { // Serve your app locally
	console.log('App running on: http://localhost:3000');
});

(async function() { // Serve your app to the world
	console.log(`App running on: ${await ngrok.connect(port)}`)
})();
