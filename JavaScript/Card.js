
var symbols = ['a','a','b','b','c','c','d','d','e','e','f','f','g','g','h','h'];
var matchSet = [];
var progress = 0;

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

function flipCard(cardNumber) {
    let symbol = symbols[cardNumber - 1];
    console.log(symbol);

    let card = document.getElementById('card' + cardNumber);

    if (card.classList.contains('btn-dark') && matchSet.length < 2) {
        card.className = "btn btn-light border w-75 py-5";
        card.value = symbol;
        addCard(cardNumber, symbol);
    } else if (card.classList.contains('btn-light') && matchSet.length > 0) {
        card.className = "btn btn-dark w-75 py-5";
        card.value = 'Card ' + cardNumber;
        removeCard(cardNumber);
    } else {
        console.log("Cannot flip this card.");
    }

    return symbol;
}

async function verifyMatch() {
    //TODO: throw exception
    if (matchSet.length > 2) {
        console.log("ERROR: Too many values to match.");
        return false;
    }

    if (matchSet[0].Symbol === matchSet[1].Symbol) {
        console.log("Values match!");
        matchSet.map(x => {
            document.getElementById('card' + x.CardNumber).className = "btn btn-success border w-75 py-5";
        })
        matchSet = [];
        updateProgress();
        return true;
    } else {
        console.log("Values do not match.");
        await new Promise(r => setTimeout(r, 1500));
        matchSet.map(x => {
            document.getElementById('card' + x.CardNumber).className = "btn btn-dark w-75 py-5";
            document.getElementById('card' + x.CardNumber).value = 'Card ' + x.CardNumber;
        })
        matchSet = [];
        return false;
    }
}

function addCard(cardNumber, symbol) {
    
    switch (matchSet.length) {
        case 0:
            matchSet.push({CardNumber:cardNumber, Symbol:symbol});
            break;
        case 1:
            matchSet.push({CardNumber:cardNumber, Symbol:symbol});
            verifyMatch();
            break;
        default:
            console.log("ERROR: Too many cards to add another.");
            break;
    }
    matchSet.map((x) => console.log(x));
}

function removeCard(cardNumber) {
    if (matchSet.length > 0) {
        let index = matchSet.findIndex(x => x.CardNumber === cardNumber);
        if (index > -1){
            matchSet.splice(index,1);
        }
    } else {
        console.log("ERROR: Not Enough cards to remove");
    }
    matchSet.map((x) => console.log(x));
}

function updateProgress() {
    progress += 2;
    let pBar = document.getElementById('progressBar');
    let percentComplete = (progress / symbols.length) * 100;

    pBar.style.width = `${percentComplete}%`;
    pBar.ariaValueNow = percentComplete;
}