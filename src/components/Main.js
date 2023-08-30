import React from 'react'
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faGears} from '@fortawesome/free-solid-svg-icons';
function Main() {
  return (
    <>
<main>
  <div className='container-fluid'>
<h2 ><FontAwesomeIcon icon={faStar} className='star' /> OBJECTIVE</h2>
<p id='content'>Ahighly skilled front-end developer with a B.Sc. in Physics, 
specializing in HTML, CSS, and JavaScript. Proficient in 
frameworks and libraries such as React.js, Node.js, and 
Tailwind, with experience in database management using 
Excel. Seeking a challenging position to utilize my 
expertise in front-end development, problem-solving, and 
collaboration to contribute to the success of a dynamic 
software development team.</p>
</div>
<div className='container-fluid'>
 <h2><FontAwesomeIcon icon={faGears} className='icon' />  Skills and Expertise</h2>
<ul>
<div id='container1'><li>HTML</li></div>
 <div id='container2'><li>CSS</li></div> 
  <div id='container3'><li>CSS Frameworks</li></div>
  <div id='container4'><li>Javascripts</li></div>

</ul>
<ul>
<div id='container5'><li>React</li></div>
  <div id='container6'><li>Node Js</li></div>
  <div id='container7'><li>Git & Github</li></div>
  <div id='container8'><li>Debugging</li></div>
</ul>
</div>
{/* <section id='portfolio'>
 <h2>Projects</h2>

<ul>
  <li> <a href='https://etcivilcon.com/'>E&T Civil Construction</a></li>
  <li><a href='https://chelsea24hrs.netlify.app/'>chelsea24/7</a></li>
  <li><a href='https:/encyptonote.com/'>Encryptonote</a></li>

</ul>


</section> */}
</main>
    </>
  )
}

export default Main