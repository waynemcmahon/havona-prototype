import { useState, useRef } from 'react';
import { useSpring, useSprings, animated, to} from 'react-spring'
import { useDrag, useGesture } from 'react-use-gesture'
import data from "../data";
import { Card } from './Card'

export default function Deck(){
 const [animating, setAnimating] = useState(false);
 const [{ x }, spring] = useSpring(() => ({
    x: [0,0]
  }))

  const bind = useDrag(( { movement: [mx]}) => {
    const moveX = (mx / window.innerHeight) * 100;
    spring.set({
      x: [moveX, 0]
    })

    console.log(x);
  })

  const cardStyle = {
    x,
    backgroundColor: "#444",
    height: 50,
    width: 50,
  };

  return (
    <div className="deckContainer">
      <div className="deckCards" >
      <animated.div className="deckCard" {...bind()}>
      {
          data.map(e => (
            <Card    
            key={e.id}            
              name={e.name}
              type={e.type}
              text={e.text}
              style={{
                x
              }}
            />
          ))
        }    
      </animated.div>
        
      </div>
    </div>
    
    )
}
