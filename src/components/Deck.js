import React, { useState, useRef, Component } from 'react';
import data from "../data";
import { Card } from './Card'
import { useSpring, animated } from 'react-spring'

const Deck = () => {
  let [cardDeck, setCardDeck] = useState(data);
  //let [isNextCard, setIsNextCard] = useState(false);

  let array = cardDeck;

  const handleIfNextCard= (e) => {
    if(e){
      let firstCard = array.pop();
      array.unshift(firstCard);
      setCardDeck(array);
      //setIsNextCard(false);
      console.log(cardDeck);
    }
  }

  const [showCard, setShowCard] = useState(false);

  const showCardAnimation = useSpring({
    opacity: showCard ? 1 : 0,
    bottom: showCard ? `0` : `-33%`
  });

  const handleCardUp = () => {
    setShowCard(!showCard);    
    console.log(showCardAnimation);  
  }


  return (
    <div className='deckContainer'>
      <div className="deckCards" style={showCardAnimation}>
      {cardDeck.map((card) => (
        <Card 
        key={card.id}
        card={card}
        //setIsNextCard={setIsNextCard}
        //isNextCard={isNextCard}
        handleIfNextCard={handleIfNextCard}
        showCardAnimation={showCardAnimation}
        handleCardUp={handleCardUp}
        >
        </Card>
      ))}
      </div>
    </div>
  );
};

export default Deck;
