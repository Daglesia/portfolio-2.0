import { createRef, useRef, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  redirect
} from "react-router-dom";
import LogoIcon from './assets/LogoIcon.svg';

import '../App.css'

function Menu() {
  const [activeElement, setActiveElement] = useState(0);
  const [menuHidden, setMenuHidden] = useState(false);
  
  const clickMenuItem = (path: string):void => {
    setMenuHidden(true);
    redirect(path);
  }

  return (
    <>
      <div id="menu" data-active-index={activeElement}>
      <div id="menu-items" className={menuHidden ? 'inactive' : ''}>
        <div className="menu-item" onMouseOver={()=> {setActiveElement(0)}} onClick={()=>{clickMenuItem('/contact')}}>
          <p data-hidden={menuHidden}>About</p>
        </div>
        <div className="menu-item" onMouseOver={()=> {setActiveElement(1)}} onClick={()=>{setMenuHidden(true)}}>
          <p data-hidden={menuHidden}>Projects</p></div>
        <div className="menu-item" onMouseOver={()=> {setActiveElement(2)}} onClick={()=>{setMenuHidden(true)}}>
          <p data-hidden={menuHidden}>Contact</p></div>
      </div>
    </div></>
  )
}

export default Menu
