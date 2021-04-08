import { useSpring, animated } from 'react-spring'
import { Frame, Color, useMotionValue, useTransform, useAnimation } from 'framer';
import { React, useState } from "react"
import { Bio } from './card_types/Bio'
import { Music } from './card_types/Music'
import { Text } from './card_types/Text'




export const Card = ({ card, onTap, handleIfNextCard,/*  showCardAnimation, */ /* handleCardUp */}) => {
  // To move the card as the user drags the cursor
  const motionValue = useMotionValue(0);

  let [cardDetails, setCardDetails] = useState(card);

  const [showCard, setShowCard] = useState(false);

  const showCardAnimation = useSpring({
    bottom: showCard ? `33%` : `0%`
  });
  
   
  // To rotate the card as the card moves on drag
  const rotateValue = useTransform(motionValue, [-200, 200], [-50, 50]);
  
  // To decrease opacity of the card when swipped
  // on dragging card to left(-200) or right(200)
  // opacity gradually changes to 0
  // and when the card is in center opacity = 1
  const opacityValue = useTransform(
    motionValue,
    [-20, -15, 0, 15, 20],
    [0, 1, 1, 1, 0]
  );
  
  // Framer animation hook
  const animControls = useAnimation();

  const darkBlue = Color("#0055FF")
  const blue = Color.lighten(darkBlue, 10)
  
  // Some styling for the card
  // it is placed inside the card component
  // to make backgroundImage and backgroundColor dynamic
  let CardType;


  switch (cardDetails.type) {
    case "bio":
      CardType = <Bio name={cardDetails.name}/>;
      break;
    case "text":
      CardType = <Text name={cardDetails.name} text={cardDetails.text}/>;
      break;
    case "music":
      CardType = <Music name={cardDetails.name} text={cardDetails.text}/>;
      break;
    default:
      CardType = <Bio name="Default"/>;;
  }

  const style = {
    minHeight: "600px",
    maxWidth: "450px",
    width: "100%",
    borderRadius: "0 25px 0 0",
    backgroundColor: "none"
  };

  const handleCardUp = () => {
    setShowCard(!showCard);   
    console.log(showCardAnimation); 
  }



   return (
       <animated.div 
        className="deckCard" 
        style={showCardAnimation}
        onClick={() => handleCardUp()}
      > 
        {CardType} 
       
        </animated.div>
   )
  /*  return (
     <div>
       <Frame      
         // Card can be drag only on x-axis
         drag='x'
         style={style}
         x={motionValue}
         rotate={rotateValue}
         opacity={opacityValue}
         onTap={onTap} 
         dragConstraints={{ left: -1000, right: 1000 }}
         onDragEnd={(event, info) => {
           console.log(info.point);
           // If the card is dragged only upto 150 on x-axis
           // bring it back to initial position
           if (Math.abs(info.point.x) <= 150) {
             animControls.start({ x: 0 });
           }  else {
             
             // If card is dragged beyond 150
             // make it disappear
   
             // Making use of ternary operator
             animControls.start({ x: info.point.x < 0 ? -200 : 200 });
             //handleIfNextCard();
             //setCardDetails(card);
             //console.log("test");
            }
          }}
       >
       <animated.div 
        className="deckCard" 
        style={showCardAnimation}
        onClick={() => handleCardUp()}
      > 
        {CardType} 
       
        </animated.div>
       
       </Frame>
     </div>
   ) */
 }

 
/* export const Card = ({name, type, text}) => {
    switch (type) {
        case "bio":
          return <Bio name={name}/>;
          break;
        case "text":
          return <Text name={name} text={text}/>;
          break;
        case "music":
          return <Music name={name} text={text}/>;
          break;
        default:
          return <Bio name="Default"/>;;
      }
} */