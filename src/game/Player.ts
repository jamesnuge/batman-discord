import { Card } from './Card';

export interface Player {
    id: string;
    card: Card;
    graveyard: Card[];
}
