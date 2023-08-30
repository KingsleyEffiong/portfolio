import React from 'react'
import './Nav.css';
import Intro from './Intro';
import Main from './Main';

function Nav() {
  return (
    <>
<header className='head'>

    <nav className='nav'>
      
            <div className='logo'>
     <a href='/'>
                <h3>Emmanuel Peter</h3>
                </a>
            </div>
       <div className='menu-item'>
        <ol className='ol-list'>
          <li className='list-item'>
            <a href='#about'>
              <h4>About</h4>
            </a>
          </li>
          <li className='list-item'>
            <a href='#portfolio'>
              <h4>Portfolio</h4>
            </a>
          </li>
          <li className='list-item'>
            <a href='#contact'>
              <h4>Contact</h4>
            </a>
          </li>
        </ol>
       </div>
    </nav>
<Intro/>
    
</header>
<Main/>
</>

  )
}

export default Nav