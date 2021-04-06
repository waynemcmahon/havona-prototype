import { React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export const Bio = ({name, type}) => {

    return (
        <div>
            <div className="deckCardDetails">
                <div className="deckCardDetailsArtistName">{name}</div>
                <div className="deckCardDetailsArtistType"><label>Musician/DJ</label></div>
                <div className="deckCardDetailsArtistLocation"><label>Ibiza, Spain</label></div>
            </div>
            <FontAwesomeIcon icon={faHeart} className="likeBtnHeart"/>
            <div className className="horizontalLine"></div>
            <div className="followerCount">
                <div className="followerCountNumber">30.3k<span className="followerCountText">Followers</span></div>
                <div className="followerCountNumber">589<span className="followerCountText">Following</span></div>
                <div className="followerCountNumber">404k<span className="followerCountText">Views</span></div>
            </div>            
        </div>
    )
        
}