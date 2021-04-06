import React, { useState, useRef } from 'react';
import { useSpring, useSprings, animated} from 'react-spring'
import { useDrag, useGesture } from 'react-use-gesture'
import { Swipeable, direction } from 'react-deck-swiper';
import data from "../data";
import { Card } from './Card'
import { getNodeText } from '@testing-library/dom';

export default function Deck(){
  let [cardDeck, setCardDeck] = useState(data)
  let [touchPosition, setTouchPosition] = useState({ x: 0, y: 0})
  let imageRef = useRef();

  


  // These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const [gone] = useState(() => new Set())
const [props, set] = useSprings(data.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above

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

  useGesture({
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
    });
  return (
    <div className="deckContainer">
      <div className="deckCards" ref={imageRef}>
        {cardDeck.map(e => (
            e.id === 2
               ? <animated.div className="deckCard"
                  key = {e.id}
                  style={{              
                        left: touchPosition.x,
                        width: "auto",
                        position: "absolute"
                    }}
                >
                  <Card              
                    name={e.name}
                    type={e.type}
                    text={e.text}
                  /> 
                </animated.div>
            :
            <animated.div className="deckCard" key={e.id}  >
              <Card      
                        
                name={e.name}
                type={e.type}
                text={e.text}
              /> 
            </animated.div>
        ))}
      </div>
    </div>
  )
}

