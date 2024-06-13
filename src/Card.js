class Card {
    id ;
    title;
    isClicked;
    
    constructor(title){
        this.id = Math.random() * 20 + new Date().getTime();
        this.title = title;
        this.isClicked = false;
    }
   
}

export {Card };