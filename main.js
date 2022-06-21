// STEP 0: Export arcana and tarot objects from cards.js
const myModule = require("./cards.js");
const tarot = myModule.tarot;
const arcana = myModule.arcana;


// STEP 1: SHUFFLE CARDS
// Function that shuffle cards using Fisher-Yates algorithm
const fisherYates = (toShuffle = []) => {
    for (let i = (toShuffle.length - 1); i > 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [toShuffle[i], toShuffle[randomIndex]] = [toShuffle[randomIndex], toShuffle[i]];
    }
    return toShuffle;
    // source: https://medium.com/javascript-by-doing/learn-fisher-yates-shuffle-in-javascript-275881d36650
  }

//console.log(cards); //Should return cards shuffled


// STEP 2: LET USER CUT CARDS-------------------------need entry :(
    // so we skip it for now and we do a slice to the 3 first cards
let cards = fisherYates(Object.keys(tarot)).slice(0,3)


// STEP 3: RETURN THE POSTION OF THE CARD (UPRIGHT OR REVRSED)
function randomPosition(cards) {
    let position = [];
    for (i = 0; i < cards.length; i++) {
        let random = Math.floor(Math.random()*2)
        if (random === 1) {
            position.push('_upright')
        } else {
            position.push('_reversed')
        }
    }

    return position
}
const positions = randomPosition(cards); // should return array of postions to match cards
//console.log(positions) 


// STEP 4: READ THE CARDS
// the type of card split + the propierties of the split
const split3 = ['Romance', 'Career', 'Finances']
const splitMeanings = Object.keys(tarot._world._position._reversed._meaning)


function readCards(cards, positions, split, splitMeanings) {
    for (i = 0; i < cards.length; i++) {
        console.log('\n' + split[i] + ' card => ' + tarot[cards[i]]._name.toUpperCase()) // log first card
        console.log('------------------------------------')
        console.log('Part of the ' + tarot[cards[i]]._arcana + ' set, ' + arcana._set[tarot[cards[i]]._arcana]) // log Arcana
        if (tarot[cards[i]]._suit) {   // if for checking card suit exist 
                console.log('Belongs to the "' + tarot[cards[i]]._suit + '" family, ' + arcana._suit[tarot[cards[i]]._suit]) // log suit no suit for majors
            }
        console.log('Position: '+ tarot[cards[i]]._position[positions[i]]._position) //log first position
        console.log('The card in this position indicates signs of: ' + tarot[cards[i]]._position[positions[i]]._keywords) //log keywords
        console.log('Meaning in '+ split[i] + ': ' + tarot[cards[i]]._position[positions[i]]._meaning[splitMeanings[i]]+ '\n')
    }
}

readCards(cards, positions, split3, splitMeanings); // should return the fortune of the user :)




/* EXTRA ESPECIAL MESSAGE */
// if all cards are major arcana or from the same suit, logs a special message

const allEqual = arr => arr.every( v => v === arr[0] )

function specialMessage(cards) {
    let arcanas = [];
    let suits = [];
    //fill arcana array
    for (i = 0; i < cards.length; i++) {
        arcanas.push(tarot[cards[i]]._arcana)
    }
    //fill suits array
    for (i = 0; i < cards.length; i++) {
        suits.push(tarot[cards[i]]._suit)
    }

    if (allEqual(arcanas) && arcanas[0] === 'Major Arcana') {
        console.log('*Special message*')
        console.log('Your tarot reading is full of Major Arcana cards, this means an important lesson or shift is happening. It means potentially life-changing energy is present.')
    } else if (allEqual(suits)) {
        console.log('*All your cards are from the same suit => ' + suits[0] + '*')
        if (suits[0] === 'Suit of Wands') {    
            console.log("The wands imbue their users with primal energy, for it is through them that the cycle of creation can begin. Because of their ability to bring energy into any situation, they are also associated with action, ambition and making plans. At their worst, they can refer to situations that are filled with recklessness and lack of direction. As you follow the journey within the wands, you'll come across these themes again and again.")
        } else if (suits[0] === 'Suit of Cups') {    
            console.log("They frequently talk about relationships, whether romantic or otherwise, and one's imagination and inner world.  At their worst, the cups suit is fret with uncontrolled feelings, fantasy, and a disconnect with one's inner voice.")
        } else if (suits[0] === 'Suit of Swords') {    
            console.log("These cards focus on the faculty and power of intellect, which like the swords themselves, are double-edged. This can be used for both good or evil, to help and to harm, and our greatest conflicts usually come from this delicate balance. At their worst, the swords can be abusive, harsh, and lack empathy.")
        } else {    
            console.log("They are usually concerned with your long term future, career, generosity, your household, business investments and your feelings of sensuality. The negative side of the pentacles show up as greed, jealousy, miserliness, and unbridled ambition at the cost of all else.")
        }
    }
}

specialMessage(cards); // Should return special message

