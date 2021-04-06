import React, { useState, useRef, Component } from 'react';
import { useSpring, animated} from 'react-spring'
import { useDrag, useGesture } from 'react-use-gesture'
import { Swipeable, direction } from 'react-deck-swiper';
import data from "../data";
import { Card } from './Card'
import { getNodeText } from '@testing-library/dom';

class Deck extends React.Component{
  constructor(props) {
    super();

    props = {
      cards: data
    }
    this.state = props;
  }

  componentDidMount(){
    console.log(this.state.cards);
  }

  handleOnSwipe = (swipeDirection, onAfterSwipe) => {
    console.log(direction);
    if (swipeDirection === direction.RIGHT || swipeDirection === direction.LEFT) {
      this.nextCard();
      return;
    }
  }

  nextCard = () => {
    let array = this.state.cards;
    let firstCard = array.pop();
    array.unshift(firstCard);

    array.concat(firstCard);
    this.setState({
      cards: array
    })
    console.log(this.state.cards);
  }
  
render(){
  return (
      <div className="deckContainer">
      
        <div className="deckCards">
        {data.map(e => (
          <Swipeable onSwipe={this.handleOnSwipe}>
          <div className="deckCard">
              <Card      
                key={e.id}          
                name={e.name}
                type={e.type}
                text={e.text}
              /> 
          </div>
        </Swipeable>
         
          
        
      ))}
      <button onClick={this.nextCard}>Push</button>
      </div>
      
      </div>
  )
}
}

export default Deck;
