import { useRef, useState, type ReactElement } from 'react'
import {
  Form, Link
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import './ContactForm.css'

function ContactForm (): ReactElement {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);
  const element =
  <div>
  <button type="button" onClick={() => setInProp(true)}>
    Click to Enter
  </button>
</div>

  return (
    <><div id="form-component">
        <div id="form-container-border">
            <div id="form-container">
              <h1>Contact</h1>
              <div className='input-row'>
                <label>Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className='input-row'>
                <label>Email</label>
                <input type="email" name="ddd" />
              </div>
              <h3>Message</h3>
              
            <textarea name="message"></textarea>
            <button id="form-button">Submit</button>
            </div>
        </div>
    </div></>
  )
}

export default ContactForm
