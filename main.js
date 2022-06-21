// Object of cards, context, what to do
const tarot = {
    
    _magician: {
        _name: 'The Magician',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'willpower, desire, being resourceful,, skill, ability, concentration, manifestation',
                _meaning: {
                    _love: 'creating opportunities for love, being proactive in love',
                    _career: 'harnessing career opportunities, determination and drive',
                    _finance: 'pursuing financial opportunity, making use of skills'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'manipulation, cunning, trickery, wasted talent, illusion, deception',
                _meaning: {
                    _love: 'romantic illusion, romantic trickery, low willpower for love',
                    _career: 'wasted talent, unwillingness to take chances, workplace deception',
                    _finance: 'missed financial opportunity, not using skills for financial gain'
                },
            },
        },

    },

    _sun: {
        _name: 'The Sun',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'happiness, success, optimism, vitality, joy, confidence, happiness, truth',
                _meaning: {
                    _love: 'happiness and love in relationship, positivity is attractive, feeling radian',
                    _career: 'enthusiastic and energetic at work, successful work projects',
                    _finance: 'strong financial situation'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'blocked happiness, excessive enthusiasm, pessimism, unrealistic expectations, conceitedness',
                _meaning: {
                    _love: 'boredom, taking love for granted, being unable to see happiness in relationship',
                    _career: 'failure to appreciate work, over-confidence at work situations, unrealistic beliefs',
                    _finance: 'overly optimistic about finances, hardships are only temporary'
                },
            },
        },

    },

    _world: {
        _name: 'The World',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'completion, achievement, fulfilment, sense of belonging, wholeness, harmony',
                _meaning: {
                    _love: 'feeling loved and grateful, fulfilling romantic life',
                    _career: 'completing career goal, fulfilling career path',
                    _finance: 'completing financial goal'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'lack of closure, lack of achievement, feeling incomplete, emptiness',
                _meaning: {
                    _love: 'missing something in love life, taking partner for granted',
                    _career: 'false measure of success, missing piece in career',
                    _finance: 'close to completing financial goal, unfulfilled despite financial comfort'
                },
            },
        },

    },

    _death: {
        _name: 'Death',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'transformation, endings, change, transition, letting go, release',
                _meaning: {
                    _love: 'changes in relationship, changes in romantic life, ending relationship',
                    _career: 'job transition, career transition, leaving unfulfilling career',
                    _finance: 'financial loss, adapting to financial loss, changing views of money'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'fear of change, repeating negative patterns, resisting change, stagnancy, decay',
                _meaning: {
                    _love: 'resisting change in relationship, failure to change negative emotional patterns',
                    _career: 'repeating negative patterns at work, remaining at unfulfilling job, lack of growth',
                    _finance: 'failure to adapt to financial loss, continuing unhealthy financial habits'
                },
            },
        },

    },

    _bla: {
        _name: 'the',
        _arcana: 'Major Arcana',
        _suit: '',
        _position: {
            _upright: {
                _position: 'upright',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
            _reversed: {
                _position: 'reversed',
                _keywords: 'keywords',
                _meaning: {
                    _love: 'love',
                    _career: 'career',
                    _finance: 'finance'
                },
            },
        },

    },
    
}


const arcana = {
    
}



// Esta es la que necesitp
function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}


// step 1: shuffle cards 
// Function that shuffle cards using Fisher-Yates algorithm
const fisherYates = (toShuffle = []) => {
    for (let i = (toShuffle.length - 1); i > 0; i -= 1) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [toShuffle[i], toShuffle[randomIndex]] = [toShuffle[randomIndex], toShuffle[i]];
    }
    return toShuffle;
    // source: https://medium.com/javascript-by-doing/learn-fisher-yates-shuffle-in-javascript-275881d36650
  }
  
let cards = fisherYates(Object.keys(tarot)).slice(0,3)
console.log(cards); //Should return cards shuffled


// step 2: let user cut cards -------------------------need entry :(
    // so we skip it for now



// step 3: return postion upright or reversed for each
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
console.log(positions) 



// test 
console.log(tarot[cards[0]]._name) // log first card
console.log(tarot[cards[0]]._arcana) // log Arcana
console.log(tarot[cards[0]]._suit) // log suit no suit for majors
console.log('Position: '+ tarot[cards[0]]._position[positions[0]]._position) //log first position
console.log('This card indicates signs of: ' + tarot[cards[0]]._position[positions[0]]._keywords) //log keywords


/*


//postions total tarot._cards.
//console.log(tarot.cards.magician.position.upright.meaning)

var randomProperty = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

//console.log(Object.keys(tarot._cards))
let randomCard = pickRandomProperty(tarot._cards)

console.log(randomCard)
console.log(tarot._cards[randomCard]._name)

*/

/*
let randomPosition = pickRandomProperty(tarot._cards[randomCard]._position)

console.log(randomPosition)
//console.log(tarot._cards[randomCard][randomPosition])

console.log(tarot._cards[randomCard])
keys= Object.keys(tarot)
console.log(keys)
*/

// console.log(tarot._cards[keys[2]]._name) Access a specific propiety