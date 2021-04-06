import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCommentAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faSoundcloud, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


    export const BottomNav = ({menuToggle, setMenuToggle, rightMenuVisible, setRightMenuVisible}) => {

    const clickMenu = () => {
        setMenuToggle(!menuToggle);
        setRightMenuVisible(!rightMenuVisible);
               
    }

    return(
        <div className="socialShareMenu">
            <div className="socialShareMenuBtn Hamburger" onClick={() => clickMenu()}><FontAwesomeIcon icon={faBars}/></div>
            <div className="socialShareMenuBtn Chat"><FontAwesomeIcon icon={faCommentAlt}/></div>
            <div className="socialShareMenuBtn Share"><FontAwesomeIcon icon={faShareAlt}/></div>
            <div className="socialShareMenuBtn Share"><FontAwesomeIcon icon={faSoundcloud}/></div>
            <div className="socialShareMenuBtn Share"><FontAwesomeIcon icon={faInstagram}/></div>               
            <div className="socialShareMenuBtn Share"><FontAwesomeIcon icon={faFacebookSquare}/></div>
        </div>
    )
}