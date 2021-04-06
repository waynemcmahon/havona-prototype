import globe from '../images/profile/menuglobe.png';
import { animated } from "react-spring";
import stats from '../images/profile/menustats.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCommentAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSoundcloud, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export const SideMenu = ({menuToggle, rightMenuAnimation}) => {
    
    let active = "";
    if(menuToggle){
        active = "active"
    }

    return(
        <animated.div className="sideMenu" style={rightMenuAnimation}>
            <img src={globe}/>
            <img src={stats}/>
        </animated.div>
    )
}