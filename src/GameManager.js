import { Card } from "./Card";

class GameManager{
    // static cards = [];

    // static addCard(card){
    //     this.cards.push(card);
    // }

    // static removeCard (card){
    //     this.cards.pop(card);
    // }
    static score = 0;
    static makeCardChecked (card){
        card.isClicked = true;
    }

    static shuffleCards(cards){
            // Loop through the array from the end to the beginning
            for (let i = cards.length - 1; i > 0; i--) {
                // Generate a random index between 0 and i
                const j = Math.floor(Math.random() * (i + 1));
        
                // Swap the elements at indices i and j
                [cards[i], cards[j]] = [cards[j], cards[i]];
            }

            return cards;
    }

    static clear(cards){
        cards.map( (card) => {
            card.isClicked = false;
        });
    }
}

export {GameManager}