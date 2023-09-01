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
<div id='content3-container'>
  <h3>Proffesional experience</h3>
  <div id='experience-container'>

    <div className='experience-container-content'>
    <h5>FRONT-END DEVELOPER </h5>
    <h5>Monsta Pizza, NGO 1</h5>
    <h5>2021</h5>
    <h1 className='experience-font'>Description</h1>
    <p>Ahighly skilled front-end developer with a B.Sc. in Physics, 
specializing in HTML, CSS, and JavaScript. Proficient in 
frameworks and libraries such as React.js, Node.js, and 
Tailwind, with experience in database management using 
Excel. Seeking a challenging position to utilize my 
expertise in front-end development, problem-solving, and 
collaboration to contribute to the success of a dynamic 
software development team.
</p>
    </div>
    <div className='experience-container-content'>
    <h5>FRONT-END DEVELOPER </h5>
    <h5>Encryptonote: www.encyptonote.com</h5>
    <h5>2023</h5>
    <h1 className='experience-font'>Description</h1>
    <p>Ahighly skilled front-end developer with a B.Sc. in Physics, 
specializing in HTML, CSS, and JavaScript. Proficient in 
frameworks and libraries such as React.js, Node.js, and 
Tailwind, with experience in database management using 
Excel. Seeking a challenging position to utilize my 
expertise in front-end development, problem-solving, and 
collaboration to contribute to the success of a dynamic 
software development team.
 </p>
    </div>
    <div className='experience-container-content'>
    <h5>FRONT-END DEVELOPER </h5>
    <h5>Chelsea24/7 Fan Page (Personal Project)</h5>
    <h5>2022 - till date</h5>
    <h1 className='experience-font'>Description</h1>
    <p>Ahighly skilled front-end developer with a B.Sc. in Physics, 
specializing in HTML, CSS, and JavaScript. Proficient in 
frameworks and libraries such as React.js, Node.js, and 
Tailwind, with experience in database management using 
Excel. Seeking a challenging position to utilize my 
expertise in front-end development, problem-solving, and 
collaboration to contribute to the success of a dynamic 
software development team.
.</p>
    </div>
    <div className='experience-container-content'>
    <h5>FRONT-END DEVELOPER </h5>
    <h5>Barcelona Fan Page: www.barcarealfans.com (Personal Project)</h5>
    <h5>2023</h5>
    <h1 className='experience-font'>Description</h1>
    <p>Ahighly skilled front-end developer with a B.Sc. in Physics, 
specializing in HTML, CSS, and JavaScript. Proficient in 
frameworks and libraries such as React.js, Node.js, and 
Tailwind, with experience in database management using 
Excel. Seeking a challenging position to utilize my 
expertise in front-end development, problem-solving, and 
collaboration to contribute to the success of a dynamic 
software development team.
</p>

    </div>
    <div className='experience-divider'>
      
      </div>
  </div>
</div>

<div id='content3-container'>
  <h3>Education & Certification, Training & Courses</h3>
  <div id='experience-container'>

    <div className='experience-container-content'>
    <h5>Education, Certification </h5>
    <h5>B.Sc. in Physics - University of Cross River State (UniCross)</h5>
    <h5>2016</h5>
    <h1 className='experience-font'>Description</h1>
    <p>Ahighly skilled front-end developer with a B.Sc. in Physics, 
specializing in HTML, CSS, and JavaScript. Proficient in 
frameworks and libraries such as React.js, Node.js, and 
Tailwind, with experience in database management using 
Excel. Seeking a challenging position to utilize my 
expertise in front-end development, problem-solving, and 
collaboration to contribute to the success of a dynamic 
software development team.
</p>
    </div>
    <div className='experience-container-content'>
    <h5>CERTIFICATIONS AND TRAINING</h5>
    <h5>Web Development, Udemy - Instructor: Dr. Angela Yu (Senior Developer)</h5>
    <h5>2021</h5>
    <h1 className='experience-font'>Description</h1>
    <p>Ahighly skilled front-end developer with a B.Sc. in Physics, 
specializing in HTML, CSS, and JavaScript. Proficient in 
frameworks and libraries such as React.js, Node.js, and 
Tailwind, with experience in database management using 
Excel. Seeking a challenging position to utilize my 
expertise in front-end development, problem-solving, and 
collaboration to contribute to the success of a dynamic 
software development team.
 </p>
    </div>
    <div className='experience-container-content'>
    <h5>COURSES </h5>
    <h5> HTML, CSS, JavaScript, Bootstrap, Document Object Model, React.JS</h5>
    <h1 className='experience-font'>Description</h1>
    <p>Ahighly skilled front-end developer with a B.Sc. in Physics, 
specializing in HTML, CSS, and JavaScript. Proficient in 
frameworks and libraries such as React.js, Node.js, and 
Tailwind, with experience in database management using 
Excel. Seeking a challenging position to utilize my 
expertise in front-end development, problem-solving, and 
collaboration to contribute to the success of a dynamic 
software development team.
.</p>
    </div>
    
    <div className='experience-divider'>
      
      </div>
  </div>
</div>

    </div>
    </>
  )
}

export default Main