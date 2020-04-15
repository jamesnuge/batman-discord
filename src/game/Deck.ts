import { Card } from './Card';

const BATMAN = {
    name: 'Batman',
    value: 1
},
    CAT_WOMAN = {
        name: 'Catwoman',
        value: 2
    },
    BANE = {
        name: 'Bane',
        value: 3
    },
    ROBIN = {
        name: 'Robin',
        value: 4
    },
    POISON_IVY = {
        name: 'Poison Ivy',
        value: 5
    },
    TWO_FACE = {
        name: 'Two Face',
        value: 6
    },
    HARLEY_QUINN = {
        name: 'Harley Quinn',
        value: 7
    },
    JOKER = {
        name: 'Joker',
        value: 8
    };

const DECK = [
    BATMAN,
    BATMAN,
    BATMAN,
    BATMAN,
    BATMAN,
    CAT_WOMAN,
    CAT_WOMAN,
    ROBIN,
    ROBIN,
    POISON_IVY,
    POISON_IVY,
    TWO_FACE,
    HARLEY_QUINN,
    JOKER
];

export function getNewDeck(): Card[] {
    return shuffle(DECK);
}

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
function shuffle<T>(array: T[]): T[] {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

}
