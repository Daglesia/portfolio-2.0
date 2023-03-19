import { useRef, useState, type ReactElement } from 'react'
import {
  Form, Link
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

function AboutPage (): ReactElement {
  return (
    <>  <main id="">
    <h1>Hi there, I'm Magdalena!</h1>
    <span>I'm a software engineer with two years of experience in the industry. I'm passionate about building scalable and performant applications that deliver value to end-users. In my career so far, I've had the opportunity to work with a variety of technologies and tools, including:</span>
    <ul>
      <li>Vue.js: I'm experienced in building web applications with Vue.js, a popular JavaScript framework that's known for its simplicity and ease of use.</li>
      <li>Node.js: I've worked with Node.js to build server-side applications and APIs that can handle large amounts of traffic and data.</li>
      <li>AWS: I have experience using Amazon Web Services (AWS) to deploy, manage, and scale applications in the cloud.</li>
    </ul>
    <span>In addition to these technologies, I also have experience with other front-end and back-end tools, including HTML, CSS, JavaScript, Express.js, MongoDB, and MySQL. I'm always eager to learn new things and stay up-to-date with the latest trends in the industry.</span>
    <span>Outside of work, I enjoy playing computer games and automating tasks to make my life easier. I find the process of writing scripts and creating tools to be both fun and rewarding. I'm a strong believer in the importance of work-life balance, and I strive to maintain a healthy balance between my personal and professional life.</span>
    <span>If you're interested in learning more about my work or discussing potential collaborations, please don't hesitate to <a href="mailto:magdalena@example.com">reach out to me</a>. I'm always open to new opportunities and challenges, and I look forward to hearing from you!</span>
  </main></>
  )
}

export default AboutPage
