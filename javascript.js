var quotes = [
	'How many cares one loses when one decides not to be something but to be someone. -Gabrielle Chanel',
	'Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\'t mind. -Dr. Seuss',
	'Imitation is suicide. -Ralph Waldo Emerson',
	'Do your own thing on your own terms and get what you came here for. -Oliver James',
	'Whenever you find yourself on the side of the majority, it is time to pause and reflect. -Mark Twain',
	'I will not let anyone walk through my mind with their dirty feet. -Mahatma Gandhi',
	'Wanting to be someone else is a waste of who you are. -Kurt Cobain',
	'Be yourself; everyone else is already taken. -Oscar Wilde',
	'To find yourself, think for yourself. -Socrates',
	'Where\'s your will to be weird? -Jim Morrison'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
