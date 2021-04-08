import { React, useState } from 'react'
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import './sass/style.scss';
import { Profile } from './components/Profile';
import { useSpring, animated } from 'react-spring'
import { BottomNav } from './components/BottomNav'
import Deck from './components/Deck'
import { SideMenu } from './components/SideMenu'
import { SideBarMenu } from './components/SideBarMenu'
import data from "./data";

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [rightMenuVisible, setRightMenuVisible] = useState(false);

  let [cardDeck, setCardDeck] = useState(data);

  const rightMenuAnimation = useSpring({
    opacity: rightMenuVisible ? 1 : 0,
    transform: rightMenuVisible ? `translateX(0%)` : `translateX(-300px)`
  });
  
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [sidebarMenuVisible, setSidebarMenuVisible] = useState(false);
  const [blurVisible, setBlurVisible] = useState(false);

  const sidebarMenuAnimation = useSpring({
    opacity: sidebarToggle ? 1 : 0,
    transform: sidebarToggle ? `translateX(0%)` : `translateX(-300px)`
  });
  
  
  const blurAnimation = useSpring({
    display: blurVisible ? "block" : "none",
    opacity: blurVisible ? 1 : 0
  });
  

  const sidebarToggleHandler = () => {
    setSidebarToggle(!sidebarToggle);      
    setBlurVisible(!blurVisible);
    console.log("test");
  }

/*   const handleIfNextCard= () => {
    let array = cardDeck;
    if(cardDeck){
      let firstCard = array.pop();
      array.unshift(firstCard);
      setCardDeck(array);
      //setIsNextCard(false);      
    }
  } */

  return (
    <animated.div className="App" >
    {/* <BeeSlider/> */}
     {/*  <main>
        <Toggle />
      </main> */}
      <animated.div>
        <Profile
          cardDeck={cardDeck}
          setCardDeck={setCardDeck}
          //handleIfNextCard={handleIfNextCard}
      />
      </animated.div>
     
     <animated.div className="blurOverlay" style={blurAnimation}></animated.div>
     <SideMenu rightMenuAnimation={rightMenuAnimation}/>  
     <SideBarMenu 
        sidebarToggle={sidebarToggle}  
        setSidebarToggle={setSidebarToggle}  
        sidebarMenuAnimation={sidebarMenuAnimation}
      />  
      <BottomNav 
        menuToggle={menuToggle}
        setRightMenuVisible={setRightMenuVisible}
        rightMenuVisible={rightMenuVisible}
        setMenuToggle={setMenuToggle}         
        setBlurVisible={setBlurVisible}
        blurVisible={blurVisible}
      /> 
      <div className="sidebarMenuBtn" onClick={() => sidebarToggleHandler()}></div>
    </animated.div>
  );
}

export default App;
