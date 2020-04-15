import { State, nextTurn } from './State';
import { Card } from './Card';
import { BATMAN, CAT_WOMAN, BANE, ROBIN, POISON_IVY, TWO_FACE, HARLEY_QUINN, JOKER } from './Deck';

interface ActionResult {
    state: State;
    resultMessage: string;
}

type Action = (state: State, target?: string, selection?: string) => ActionResult | string;

const BATMAN_SELECTIONS = [CAT_WOMAN, BANE, ROBIN, POISON_IVY, TWO_FACE, HARLEY_QUINN, JOKER];

const ACTION_MAP: {[id: string]: Action} = {
    [BATMAN.name]: (state: State, target?: string, selection?: string) => {
        if (isString(target) && isString(selection)) {
            const targetedPlayer = state.players.find((player) => player.id === target);
            if (targetedPlayer != undefined) {
                const targetedCard = BATMAN_SELECTIONS.find((card) => card.name === selection);
                if (targetedCard != undefined) {
                    if (targetedCard === targetedPlayer.card) {
                        const removedPlayerIndex = state.players.indexOf(targetedPlayer);
                        const players = state.players.splice(removedPlayerIndex, 1);
                        const currentTurn = state.turn;
                        const turn = removedPlayerIndex > currentTurn ? nextTurn(state) : currentTurn;
                        return {
                            state: {
                                players,
                                turn,
                                deck: state.deck
                            },
                            resultMessage: `Correct guess! ${targetedPlayer.id} is eliminated`
                        }
                    } else {
                        return {
                            state: Object.assign({}, state, { turn: nextTurn(state) }),
                            resultMessage: 'Failed to guess correctly'
                        }
                    }
                } else {
                    return `Invalid card selected: Card ${selection} is not a valid choice`;
                }
            } else {
                return `Invalid player selected: Player ${target} is not in the current game or round`;
            }
        } else {
            return 'To play a batman card both a target and card selection must be defined';
        }
    },
    [CAT_WOMAN.name]: (state: State, target?: string, selection?: string) => {
        if (isString(target)) {
            const player = state.players.find((player) => player.id === target);
            if (player !== undefined) {
                return {
                    state: Object.assign({}, state, { turn: nextTurn(state) }),
                    resultMessage: `${target} has a ${player.card}`
                };
            } else {
                return `Unable to find player with id: ${target}`;
            }
        } else {
            return `Unable to play a cat woman without a target`;
        }
    },
    [BANE.name]: (state: State, target?: string, selection?: string) => {
        return '';
    }
}

function isString(val: unknown): val is string {
    return typeof val === 'string';
}