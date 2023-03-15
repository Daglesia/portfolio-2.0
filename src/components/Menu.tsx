import { type ReactElement, useRef, useState } from 'react'

import { CSSTransition } from 'react-transition-group'

import '../App.css'

interface MenuProps {
  changeRoute: (arg0: string) => void
  setActiveElement: (arg0: number) => void
  setMenuItemSelected: (arg0: boolean) => void
}

function Menu (props: MenuProps): ReactElement {
  const [menuHidden, setMenuHidden] = useState(false)
  const [menuItemChosen, setMenuItemChosen] = useState('')

  const menuItems = useRef(null)

  const onMenuHidden = (path: string): void => {
    props.changeRoute(path)
  }

  const menuItemComponent = (label: string, href: string, index: number): ReactElement => {
    const transitionRef = useRef(null)

    return <div key={label} className="menu-item" onMouseLeave={() => { props.setMenuItemSelected(false) }}
     onMouseOver={() => { props.setMenuItemSelected(true); props.setActiveElement(index) }} onClick={() => { setMenuItemChosen(href); setMenuHidden(true) }}>
<CSSTransition key={label} nodeRef={transitionRef} in={menuHidden} timeout={1200} classNames="menu-item-p" onEntered={() => { if (index === 2) { onMenuHidden(menuItemChosen) } }}>
    <p ref={transitionRef}>
        {label}
    </p>
</CSSTransition>
</div>
  }
  const menuItemArray = [
    menuItemComponent('About', '/about', 0),
    menuItemComponent('Projects', '/projects', 1),
    menuItemComponent('Contact', '/contact', 2)
  ]

  return (
    <>
      <div id="menu" className={menuHidden ? 'inactive' : ''}>
      <div id="menu-items" ref={menuItems}>
        {menuItemArray}
      </div>
    </div></>
  )
}

export default Menu
