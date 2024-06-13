import { useState } from 'react'
import './css/App.css'
import { Card  } from './Card'
import { GameManager } from './GameManager'

let cardTitles = [ "muhammed" , "badr" , " hussin" , "shehab" , "adham" , "emad"];
let Cards =[];

// console.log(cardTitles);

cardTitles.forEach((cardTitle) => {
  Cards.push(new Card(cardTitle) );
});

function App() {
  const [cards , setCards] = useState(Cards);
  // console.log(Cards);

  
  return (
    <>

    {/* <h1>{GameManager.score}</h1> */}
    <h1>score {GameManager.score}</h1>

    { cards.map( (card) => {
        return( 
        <>
        <button onClick = { () => {
          
          Cards = GameManager.shuffleCards(Cards);
          if(card.isClicked == false){
            GameManager.makeCardChecked(card);
            GameManager.score++;
          } else{
            GameManager.clear(Cards);
            GameManager.score = 0 ;
          }

          setCards( [...Cards] );
          } } key = {card.id}> {card.title}</button>
          
          </>
        );
    })}
    </>
  )
}

export default App
