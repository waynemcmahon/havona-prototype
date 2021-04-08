import React, { useState, useRef, Component } from 'react';
import { Card } from './Card'
import { useSpring} from 'react-spring'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Deck = (cardDeck, setCardDeck, handleIfNextCard) => {
  //let [isNextCard, setIsNextCard] = useState(false);
  console.log(cardDeck);
  let array = cardDeck.cardDeck;

  const [showCard, setShowCard] = useState(false);

  const showCardAnimation = useSpring({
    bottom: showCard ? `-10%` : `-70%`
  });

  const handleCardUp = () => {
    setShowCard(!showCard);    
  }

  /* return (
    <div className='deckContainer'>
    
      <div className="deckCards">
      <Splide
        options={ {
          width  : 800,
          fixedWidth: 400,
          fixedheight: 600,
          type   : 'loop',
          perPage: 3,
          perMove: 1,
          focus  : 'center',
          gap: '1em',
        }}
      >
      {array.map((card, i) => {
        let upAnimation;
        
        return <SplideSlide>        
          <Card 
            key={card.id}
            card={card}
            //setIsNextCard={setIsNextCard}
            //isNextCard={isNextCard}
          // handleIfNextCard={handleIfNextCard}
            showCardAnimation={showCardAnimation}
            handleCardUp={handleCardUp}
          >
          </Card>
        </SplideSlide>
      })}
      </Splide>
      </div>
    </div>
  ); */
  return (
    <div className='deckContainer'>
      <div className="deckCards">
        <Splide
          options={ {
          width  : 300,
          fixedWidth: 300,
          fixedheight: 600,
          type      : 'loop',
          hasSliderWrapper: false,
          perPage: 1,
          perMove: 1,
          pagination  : false,
          arrows: false,
        }}
        >
        {array.map((card, i) => {
          let upAnimation;
          
          {/* if (i === array.length -1 ){
              upAnimation = showCardAnimation;
          } */}
          return  <SplideSlide><Card 
              key={card.id}
              card={card}
              //setIsNextCard={setIsNextCard}
              //isNextCard={isNextCard}
            // handleIfNextCard={handleIfNextCard}
              //showCardAnimation={showCardAnimation}
              //handleCardUp={handleCardUp}
            >
            </Card>
            </SplideSlide>
        })}
        </Splide>
      </div>
    </div>
  );
};

export default Deck;
