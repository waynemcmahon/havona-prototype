import { useState, useRef } from 'react';
import { useSpring, animated} from 'react-spring'
import { useGesture} from 'react-use-gesture'
import data from "../data";
import { Card } from './Card'
import DeckStackCards from './BU/DeckStackCards'

export default function DeckContainer(){
  return(
    <>
      <CardGesture />
    </>
  )
}

function CardGesture(){
  let [touchPosition, setTouchPosition] = useState({ x: 0, y: 0})
  let imageRef = useRef();

  /* useGesture({
    onDrag: ({ offset: [dx, dy]}) => {
      setTouchPosition({x: dx, y: dy})
      console.log(dx);
    },
  }, {
      domTarget: imageRef
  });
 */
  return(
    //<animated.div className="deckContainer">
    <DeckContainer/> 
    //</animated.div>
  )
}