import { State } from './State';

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

    public takeTurn(action: string): void {
        console.log(action);
        this.state.turn = (this.state.turn + 1) % (this.state.players.length - 1);
    }

}
