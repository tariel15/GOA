//https://www.codewars.com/kata/52ebe4608567ade7d700044a/train/javascript
const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
const suits = ['c', 'd', 'h', 's'];

function encode (input) {
  return input.map(card => cards.indexOf(card[0]) + suits.indexOf(card[1]) * 13).sort((a, b) => a - b);
}

function decode (input) {
  return input.sort((a, b) => a - b).map(card => cards[card % 13] + suits[Math.floor(card / 13)]);
}