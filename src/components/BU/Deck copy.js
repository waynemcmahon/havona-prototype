import { useState, useRef } from 'react';
import { useSpring, animated} from 'react-spring'
import { useGesture} from 'react-use-gesture'
import data from "../data";
import { Card } from './Card'

export default function Deck(){
  return(
    <>
      <CardGesture />
    </>
  )
}

function CardGesture(){
  let [touchPosition, setTouchPosition] = useState({ x: 0, y: 0})
  let imageRef = useRef();

  useGesture({
    onDrag: ({ offset: [dx, dy]}) => {
      setTouchPosition({x: dx, y: dy})
      console.log(dx);
    },
  }, {
      domTarget: imageRef
  });

  return(
    <div className="deckContainer">
        <div className="deckCards">
          {data.map(e => (
            <animated.div key={e.id} className="deckCard" 
              ref={imageRef}
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
              >
              </Card>
            </animated.div>     
          ))
          }
        </div>          
      </div>
  )
}