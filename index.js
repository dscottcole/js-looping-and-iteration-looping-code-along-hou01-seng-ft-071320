// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
function writeCards(cards, reason) {
    let array = []
    for (let i = 0; i < cards.length; i++) {
        array.push(`Thank you, ${cards[i]}, for the wonderful ${reason} gift!`)
        console.log(array)
    }
    return array
}

writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i)
    }
}
