import globe from '../images/profile/menuglobe.png';
import { animated } from "react-spring";
import stats from '../images/profile/menustats.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSearch, faHome, faUser, faVrCardboard } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSoundcloud, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export const SideBarMenu = ({sidebarToggle, sidebarMenuAnimation}) => {
    
    let active = "";
    if(sidebarToggle){
        active = "active"
    }

    console.log(sidebarMenuAnimation);

    return(
        <animated.div className="sideBarMenu"  style={sidebarMenuAnimation}>
            <FontAwesomeIcon icon={faCog}/>
            <FontAwesomeIcon icon={faSearch}/>
            <FontAwesomeIcon icon={faHome}/>
            <FontAwesomeIcon icon={faUser}/>
            <FontAwesomeIcon icon={faVrCardboard}/>
            <FontAwesomeIcon icon={faCog}/>
            <FontAwesomeIcon icon={faSearch}/>
            <FontAwesomeIcon icon={faHome}/>
            <FontAwesomeIcon icon={faUser}/>
            <FontAwesomeIcon icon={faVrCardboard}/>
        </animated.div>
    )
}