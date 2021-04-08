import  { Deck } from '../components/Deck';
import profileBG from '../images/profile/bg3.png';
import headshot from '../images/profile/headshotFull.png';
import overlay from '../images/profile/overlay1.png';

export const Profile = ({cardDeck, setCardDeck, /* handleIfNextCard */}) => {
    
    return(
        <div className="profileContainer" style={{ backgroundImage: `url(${profileBG})`}}>
            {/* <img src={headshot } className="profileHeadshot"/> */}
            
            {/* <div className="profileHeadshot" style={{ backgroundImage: `url(${headshot})`}}></div> */}
            <Deck
                cardDeck={cardDeck}
                setCardDeck={setCardDeck}
                //handleIfNextCard={handleIfNextCard}
            />
             <img src={overlay} className="transparencyGradient"/>
        </div>
    )
}