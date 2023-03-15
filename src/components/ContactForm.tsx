import { createRef, useRef, useState } from 'react'
import {
  Form, Link
} from "react-router-dom";
import LogoIcon from './assets/LogoIcon.svg';

import './ContactForm.css'


function ContactForm() {


  return (
    <><div id="form-component">
        <div id="form-container-border">
            <div id="form-container">
            <Form method="post">
      <input type="text" name="title" />
      <input type="text" name="description" />
      <button type="submit">Create</button>
    </Form>
    <Link to='/contacts'>beep</Link>
            </div>
        </div>
    </div></>
  )
}

export default ContactForm;
