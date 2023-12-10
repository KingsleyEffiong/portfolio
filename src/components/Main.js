import React from 'react'
import './Nav.css';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBusinessTime, faUsers} from '@fortawesome/free-solid-svg-icons';
function Main() {
  return (
    <>
    <div id='container'>
<div id='content-container'>
 <h3><FontAwesomeIcon icon={faBusinessTime} className='icons' />  Objectives</h3>
 <p id='paragraph-content'>
 A highly skilled front-end developer with a B.Sc. in Physics, specializing in HTML, CSS, and JavaScript. Proficient in frameworks and libraries such as React.js, Node.js, and Tailwind, with experience in database management using Excel. Seeking a challenging position to utilize my expertise in front-end development, problem-solving, and collaboration to contribute to the success of a dynamic software development team.
 </p>
</div>
<div id='content2-container'>
  <h3><FontAwesomeIcon icon={faUsers} className='icons'/>  Skills</h3>
  <div id='container-skill-rating'>
    <div id='skills-rating1'>
      HTML5
    </div>
    <div id='skills-rating2'>
    CSS3
    </div>
    <div id='skills-rating3'>
    JavaScript
    </div>
    <div id='skills-rating4'>
   Frameworks
    </div>
  </div>
</div>
  </div>

  <div className='projects'>
    <span>PROJECTS</span>
    <ol>
      <li><a href='https://etcivilcon.com'>E & T Civil Construction</a></li>
      <li><a href='https://hopealiveclinic.com'>Hope Alive Clinic</a></li>
      <li><a href='https://encyptonote.com'>Encryptonote</a></li>
      <li><a href='https://barcarealfans.com'>barcarealfans</a></li>
      <span>Current Projects</span>
      <li>Hospital Management System - Under Development</li>
    </ol>
  </div>
    </>
  )
}

export default Main