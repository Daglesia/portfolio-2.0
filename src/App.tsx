
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import LogoIcon from './assets/LogoIcon.svg'
import Menu from './components/Menu'
import ContactForm from './components/ContactForm'

import './App.css'
import { useState, type ReactElement } from 'react'

function App (): ReactElement {
  const onNavigate = (path: string): void => {
    router.navigate(path)
  }
  const [activeElement, setActiveElement] = useState(0)
  const [menuItemSelected, setMenuItemSelected] = useState(false)

  const router = createBrowserRouter(
    createRoutesFromElements(
    <><Route path="/" element={<Menu changeRoute={onNavigate} setActiveElement={setActiveElement} setMenuItemSelected={setMenuItemSelected}/>}>
    </Route><Route path="contact" element={<ContactForm />} /></>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
      <img id="menu-background-image" data-active-index={activeElement} data-active-hover={menuItemSelected}></img>
      <img id="footer" src={LogoIcon}/>
    </>
  )
}

export default App
