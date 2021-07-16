var quotes = ['The way to get started is to quit talking and begin doing -Walt Disney',
'The Pessimist Sees Diffculty in Every Opportunity. The Optimist Sees Opportunity in Every Difficulty - Winston Churchill',
'Don\'t let yesterday take up too much of today - Will Rogers',
'You learn more from failure than from success. Don\'t let it stop you. Failure builds Character. -Unkown',
'It\'s not whether you get knocked down, it\'s whether you get up. -Vince Lombardi.',
'If you are working on something that you really care about, you don\'t have to be pushed. The vision pulls you -Steve Jobs',
'People are crazy enough to think they can change the world, are the ones who do. -Rob Siltanen',
'Failure will never overtake me if my determination to succeed is strong enough -OG Mandino',
'Entrepreneurs are great at dealing with uncertainty and also very good at minimizing Risk. That\'s the classic entrepreneur. -Monish Pabrai',
'We may encounter many defeats but we must not be defeated. - Maya Angelou' ]


function newQuote() {
var randomNumber = Math.floor(Math.random() * quotes.length);
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]
}
