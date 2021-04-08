import { React } from "react"
import blankSquare from '../../images/profile/blanksquare.png';
import playBtn from '../../images/profile/playBtn.png';
import timeline from '../../images/profile/timeline.png';
import overlay from '../../images/profile/overlay1.png';
import data from "../../data";

export const Music = ({name, type}) => {
    const recent = ["Song 1", "Song 1", "Song 1", "Song 1"]
    const releases = ["Song 1", "Song 1", "Song 1" ]
    return (
        <div className="musicList">
        <h2>Recent</h2>
        
        {recent.map((i, index) => (
                <div className="deckCardMusic" key={index}>
                    <div className="deckCardDetails">
                        {/* <div className="deckCardDetailsMusicTitle">{name}</div> */}
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
    </div>
        
        
        
    )
        
}