import { State } from './State';
import { Card } from './Card';

export class Game {

    private readonly id: string;
    private state: State;

    constructor(
        id: string,
        state: State
    ) {
        this.id = id;
        this.state = state;
    }

    public playCard(card: number, target?: string, selection?: string): void {
        this.state.turn = (this.state.turn + 1) % (this.state.players.length - 1);
    }

}

function isNumber(val: unknown): val is number {
    return typeof val === 'number';
}
