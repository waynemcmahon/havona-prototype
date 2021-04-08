import React, { useState, useRef } from 'react';
import { useSpring, useSprings, animated} from 'react-spring'
import { useDrag, useGesture } from 'react-use-gesture'
import { Swipeable, direction } from 'react-deck-swiper';
import data from "../data";
import { Card } from './Card'
import { getNodeText } from '@testing-library/dom';

export const Deck = ({cardDeck, setCardDeck}) => {
  //let [cardDeck, setCardDeck] = useState(deck)
  let [touchPosition, setTouchPosition] = useState({ x: 0, y: 0})
  let imageRef = useRef();

  const nextCard = () => {
      let array = cardDeck;
      let firstCard = array.pop();
      array.unshift(firstCard);
      setCardDeck(array);
  }

/*   const handleOnSwipe = (swipeDirection, onAfterSwipe) => {
    console.log(direction);
    if (swipeDirection === direction.RIGHT || swipeDirection === direction.LEFT) {
      nextCard();
      return;
    }
  } */

  /* useGesture({
    onDrag: ({ args: [index], direction: [xDir], offset: [dx], velocity, down }) => {
      const trigger = velocity > 0.2
      const dir = xDir < 0 ? -1 : 1 
      console.log(index);
      if (!down && trigger) gone.add(index)

        setTouchPosition({x: dx})
      
        if(dir === -1 || dir === 1){
          //nextCard();
        }
       
    },
    }, {
        domTarget: imageRef
    }); */
  return (
    <div className="deckContainer">
      <div className="deckCards" ref={imageRef}>
        {cardDeck.map(card => (
          card.id === 2
               ? <div
                  key = {card.id}
                  style={{              
                        left: touchPosition.x,
                        width: "auto",
                        position: "absolute"
                    }}
                >
                  <Card 
                  card={card}             
                    name={card.name}
                    type={card.type}
                    text={card.text}
                  /> 
                </div>
            :
            <div key={card.id}  >
              <Card      
                card={card}  
                name={card.name}
                type={card.type}
                text={card.text}
              /> 
            </div>
        ))}
      </div>
    </div>
  )
}

