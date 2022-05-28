const whiteCards = ["Charlie", "Samip", "Ali"]
const newArray = []
function writeCards(whiteCards, birthday) {
    for (let i = 0; i < whiteCards.length; i++) {
        console.log(`Thank you, ${whiteCards}, for the wonderful ${birthday} gift!`)
        newArray = whiteCards();
        return newArray;

    }
}