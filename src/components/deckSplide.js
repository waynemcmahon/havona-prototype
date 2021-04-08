import React, { useState, useRef, Component } from 'react';
import { Card } from './Card'
import { useSpring} from 'react-spring'
import { ToggleCard, TinderLikeCard, StackCard, Tiner } from 'react-stack-cards'
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Deck = (cardDeck, setCardDeck, handleIfNextCard, props) => {
  let [isOpen, setIsOpen] = useState(false);
  let [directionToggle, setDirectionToggle] = useState("sideSlide");
  let [directionTinder, setDirectionTinder] = useState("swipeCornerDownRight");
  let [directionStack, setDirectionStack] = useState( "topRight");
  let [Tinder, setTinder] = useState( null);
  console.log(props);

  let array = cardDeck.cardDeck;

  const [showCard, setShowCard] = useState(false);

  const showCardAnimation = useSpring({
    bottom: showCard ? `-10%` : `-70%`
  });

  const handleCardUp = () => {
    setShowCard(!showCard);    
  }

  return (
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
  );

/*   function onTinderSwipe() {
    Tinder.swipe()
  }
  function onToggle() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  const arr = ["first", "second", "third", "fourth"]
  const numbers = [0, 1, 2, 3]
    
    return (
      <div>
        <ToggleCard 
          images={arr}
          width="350"
          height="240"
          direction={directionToggle}
          duration={400}
          className="toggle"
          isOpen={isOpen}
          onClick={()=> alert("Hello")}
        >
        { numbers.map( i => <div>{i}</div> )}
        </ToggleCard>
        <button onClick={() => onToggle()}>Toggle</button>

        <TinderLikeCard
            images={arr}
            width="350"
            height="250"
            direction={directionTinder}
            duration={400}
            ref={(node) => Tinder = node}
            className="tinder"
        >
            { numbers.map( i => <div>{i}</div> )}
        </TinderLikeCard>
        <button 
        onClick={() => onTinderSwipe()}
        >Swipe</button>

        <StackCard
          images={arr}
          color={"#f95c5c"}
          width="350"
          height="240"
          direction={directionStack}
          onClick={()=> alert("Hello")}
        >
          <div>i</div>
        </StackCard>
      </div>
  ); */
};

export default Deck;
