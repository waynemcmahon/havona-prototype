import logo from './logo.svg';
import { React, useState } from 'react'
import ReactDOM from "react-dom";
import './App.css';
import './sass/style.scss';
import { Profile } from './components/Profile';
import { useSpring, animated } from 'react-spring'
import { BottomNav } from './components/BottomNav'
import Deck from './components/Deck'
import { SideMenu } from './components/SideMenu'
import { SideBarMenu } from './components/SideBarMenu'

function App() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [rightMenuVisible, setRightMenuVisible] = useState(false);

  const rightMenuAnimation = useSpring({
    opacity: rightMenuVisible ? 1 : 0,
    transform: rightMenuVisible ? `translateX(0%)` : `translateX(-300px)`
  });
  
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [sidebarMenuVisible, setSidebarMenuVisible] = useState(false);

  const sidebarMenuAnimation = useSpring({
    opacity: sidebarToggle ? 1 : 0,
    transform: sidebarToggle ? `translateX(0%)` : `translateX(-300px)`
  });

  const sidebarToggleHandler = () => {
    setSidebarToggle(!sidebarToggle);        
  }

  return (
    <animated.div className="App" >
     {/*  <main>
        <Toggle />
      </main> */}
     <Profile/>
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
      /> 
      <div className="sidebarMenuBtn" onClick={() => sidebarToggleHandler()}></div>
    </animated.div>
  );
}

export default App;
