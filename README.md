# 🔮 Tarot Reader 

## Description

*Tarot reader is a simple node.js app based on [tarot playing cards](https://en.wikipedia.org/wiki/Tarot) that returns three cards for the user, showing him his fortune.*

The goal of this project was to build a message generator program with JavaScript using Node.js, Git version control, and the command line for the Code Academy FullStack course. The name of the specific exercise is "Mixed Messages".


## Features

Every time a user runs the program, they get a new, randomized output, the cards shuffle using an implementation of the [Fisher-Yates shuffle algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). Thanks to this, every permutation of the set of cards is equally likely.

It is the complete set of 78 cards; each card is saved in an object containing all the properties and meanings. In resume, each card has 6 different meanings that change depending on the position (upright or reversed), also info about the suit, the name of the card and their specific keywords

## How to use
- If you have prompt-sync installed run the following command in the app directory:
```
node interactive.js
```
So you can cut the cards, meet the wizard and his friends. Just press enter to advance. 
*There is an easter-egg if you give number above 78 in this version*


- For the basic app without user input, just open the terminal in the app directory and run the following command:
```
node main.js
```
And it should output a Tarot Reading of 3 cards and the meaning of each one, example:
```
Romance card => THE FOOL
------------------------------------
Part of the Major Arcana set, this group of cards represent the pivotal events of our lives. Associated with the major themes and lessons of life.
Position: upright
The card in this position indicates signs of: beginnings, freedom, innocence, originality, adventure, idealism, spontaneity
Meaning in Romance: new relationship, fun light romance
```
- Card 1: Tells your fortune in romance.
- Card 2: Tells your fortune in career.
- Card 3: Tells your fortune in finances.

*You get an especial message if all the cards are major arcanas or from the same suit*  🧙‍♂️


## Technologies

- javaScript
- Node.js
- Git

## Author

Mario Abel Garcia. Financial Engineer.

## License

**GNU General Public License v3.0** 

*Permissions of this strong copyleft license are conditioned on making available 
complete source code of licensed works and modifications, which include larger 
works using a licensed work, under the same license. Copyright and license notices 
must be preserved. Contributors provide an express grant of patent rights.*


### Sources 

- https://labyrinthos.co/blogs/tarot-card-meanings-list
- https://www.asciiart.eu


