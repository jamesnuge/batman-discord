import { Player } from './Player';
import { Card } from './Card';

export interface State {
    deck: Card[];
    players: Player[];
    turn: number;
}

export function nextTurn(state: State): number {
    return (state.turn + 1) % state.players.length;
}

export function getCurrentPlayer(state: State): Player {
    return state.players[state.turn];
}