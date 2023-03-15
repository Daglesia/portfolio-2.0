import { createRef, useRef, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogoIcon from './assets/LogoIcon.svg';

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/contact",
    element: <div>Hello world!2</div>,
  },
]);

function App() {
  const [activeElement, setActiveElement] = useState(0);
  const [menuHidden, setMenuHidden] = useState(false);


  return (
    <><div id="app">
      <div id="menu" data-active-index={activeElement}>
      <div id="menu-items" className={menuHidden ? 'inactive' : ''}>
        <div className="menu-item" onMouseOver={()=> {setActiveElement(0)}} onClick={()=>{setMenuHidden(true)}}>
          <p data-hidden={menuHidden}>About</p>
        </div>
        <div className="menu-item" onMouseOver={()=> {setActiveElement(1)}} onClick={()=>{setMenuHidden(true)}}>
          <p data-hidden={menuHidden}>Projects</p></div>
        <div className="menu-item" onMouseOver={()=> {setActiveElement(2)}} onClick={()=>{setMenuHidden(true)}}>
          <p data-hidden={menuHidden}>Contact</p></div>
      </div>
      <div id="menu-background-image"></div>
      </div>
      <div id='router-container'>
        <RouterProvider router={router} />
      </div>
      <img id="footer" src={LogoIcon}/>
    </div></>
  )
}

export default App
