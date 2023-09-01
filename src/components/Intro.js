import React from 'react'
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown,} from '@fortawesome/free-solid-svg-icons';

function Intro() {
  return (
    <>
        <div className='container'>
  <img src='Imaes/picture-removebg-preview.png' alt='images'/>
  <div className='inside-container'>

  <p className='para'>I am Emmanuel Peter,  A Web Developer.
 I Build modern web design, and there are fully responsive 
 </p>
  <button>
    <a href='#portfolio'>View Portfolio <FontAwesomeIcon icon={faArrowDown} /></a>
    </button>
  </div>
</div>
    </>
  )
}

export default Intro