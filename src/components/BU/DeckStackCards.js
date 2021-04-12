import React, { Component } from 'react'
import { ToggleCard, TinderLikeCard, StackCard } from 'react-stack-cards'
import { Swipeable, direction } from 'react-deck-swiper';

class DeckStackCards extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      directionTinder: "swipeLeftRotate",
      cardUp: true,
      i: 0,
      displayCard:this.props.displayCard,
      blurVisible: false

    }
    this.Tinder = null
  }

  componentDidMount() {
    console.log(this.state);
  }
  
  onTinderSwipe(e) {
    this.Tinder.swipe();
    console.log(this)
    //e.target.style.setProperty("display", "none");
  }
  onClickUp(e, swipeDirection) {
    //this.state.cardUp ? e.target.style.transform = "translateY(212px)" : e.target.style.transform = "translateY(450px)"
    this.state.cardUp ? e.target.style.setProperty('transform', "translateY(118px)", 'important') : e.target.style.setProperty('transform', "translateY(450px)", 'important')
    this.setState({cardUp: !this.state.cardUp})
    this.setState({blurVisible: !this.state.blurVisible})
    console.log("Card Up " + this.state.cardUp);
    console.log("Blur Visible " +  this.state.blurVisible);
  }

  onToggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  bottomClickToggleHandler(){
    this.Tinder.swipe();
  }

 /*  handleOnSwipe = (swipeDirection, onAfterSwipe) => {
    console.log();
    console.log(direction);
    if (swipeDirection === direction.RIGHT || swipeDirection === direction.LEFT) {
      nextCard();
      return;
    }
  } */

  render() {
    let cardUp_class = this.state.cardUp ? "raiseCard" : "";
    let blur = this.state.blurVisible ? "1" : "0";
    const arr = [
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
      process.env.PUBLIC_URL + "images/card_info.png", 
      process.env.PUBLIC_URL + "images/card_tracks.png", 
      process.env.PUBLIC_URL + "images/card_gallery.png", 
      process.env.PUBLIC_URL + "images/card_data.png",
    ]
    const numbers = [0, 1, 2, 3]
    return (
      <div>
        <div className="deckContainer">
        <div className="blurOverlay profileBlur{" style={{opacity: blur}}></div>
        <div className="cardBottomClick" onClick={this.bottomClickToggleHandler.bind(this)}></div>
      <div className="deckCards">
          <div
           className="clickOverlay raiseCard"
           onClick={(e) => this.onClickUp(e)}>
          
        <TinderLikeCard
            images={arr}
            width="337"
            height="750"
            direction={this.state.directionTinder}
            duration={400}
            ref={(node) => this.Tinder = node}
            className="tinder deckCard"
            
        >
           {/*  { numbers.map( i => <div>{i}</div> )} */}
           
        </TinderLikeCard>
        </div>
        </div>
        </div>
        {/* <button style={{position: "absolute"}} onClick={this.onTinderSwipe.bind(this)}>Swipe</button> */}

      </div>
    );
  }
}

export default DeckStackCards;