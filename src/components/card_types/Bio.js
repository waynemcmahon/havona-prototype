import { React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import timeline from '../../images/profile/timeline.png';
import playBtn from '../../images/profile/playBtn.png';
import blankSquare from '../../images/profile/blanksquare.png';

export const Bio = ({name, type}) => {
    const releases = ["Song 1", "Song 1", "Song 1" ]
    return (
        <>
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
            <div className="textBox">
                <p>@iorecs</p>
                <p>@lowless-music</p>
                <p>@solid-shape-records</p>
                <p>@alexandarsound</p>

                <p>Contact: mtrlaudio@gmail.com</p>
                <p>Booking: booking@iorecords.org</p>
                <p>Booking for Lowless: eugenie@lowless-records.com</p>
            </div> 
            <h2>Releases</h2>
        {releases.map((i, index) => (
                <div className="deckCardMusic" key={index}>
                    <div className="deckCardDetails">
                        <div className="deckCardDetailsArtistPlayer">
                            <div className="deckCardDetailsTrackImage">
                                <img src={blankSquare} alt="blank"/>
                            </div>
                            <div className="deckCardDetailsTrackPlayer">
                                <div className="deckCardDetailsTrackPlayerTitle">
                                    <span className="trackTitle">{name}</span>
                                    <span className="releaseDate">1 day ago</span>
                                </div>                        
                                <img src={playBtn} alt="playBtn" className="playBtn"/>
                                <img src={timeline} alt="timeline" className="timeline"/>
                            </div>
                        </div>
                        
                    </div>
                </div>
    ))}
        </>
    )
        
}