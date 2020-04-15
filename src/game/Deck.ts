import { Card } from './Card';

export const BATMAN = {
    name: 'Batman',
    value: 1,
    hasTarget: true,
    hasSelection: true
},
    CAT_WOMAN = {
        name: 'Cat Woman',
        value: 2,
        hasTarget: true,
        hasSelection: false
    },
    BANE = {
        name: 'Bane',
        value: 3,
        hasTarget: true,
        hasSelection: false
    },
    ROBIN = {
        name: 'Robin',
        value: 4,
        hasTarget: false,
        hasSelection: false
    },
    POISON_IVY = {
        name: 'Poison Ivy',
        value: 5,
        hasTarget: true,
        hasSelection: false
    },
    TWO_FACE = {
        name: 'Two Face',
        value: 6,
        hasTarget: true,
        hasSelection: false
    },
    HARLEY_QUINN = {
        name: 'Harley Quinn',
        value: 7,
        hasTarget: false,
        hasSelection: false
    },
    JOKER = {
        name: 'Joker',
        value: 8,
        hasTarget: false,
        hasSelection: false
    };

const DECK: Card[] = [
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
