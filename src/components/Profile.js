import  Deck from '../components/Deck';
import profileBG from '../images/profile/bg.png';
import headshot from '../images/profile/headshotFull.png';

export const Profile = ({}) => {
    return(
        <div className="profileContainer" style={{ backgroundImage: `url(${profileBG})`}}>
            {/* <img src={headshot } className="profileHeadshot"/> */}
            
            <div className="profileHeadshot" style={{ backgroundImage: `url(${headshot})`}}></div>
            <Deck/>
        </div>
    )
}