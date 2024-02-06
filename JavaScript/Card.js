
var symbols = ['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h'];

function getSymbols() {
    shuffle(symbols);
    return symbols;
}

function shuffle(symbols) {
    
    let currentIndex = symbols.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [symbols[currentIndex], symbols[randomIndex]] = [
        symbols[randomIndex], symbols[currentIndex]];
    }
  
    console.log(symbols);
    return symbols;
}

function flipCard(CardNumber) {
    //let array = getSymbols();
    console.log(symbols[CardNumber - 1])
    return symbols[CardNumber - 1];
}