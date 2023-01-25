import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className='nav-bar'>
      <nav>
        <ul>
          <li>
            <NavLink to='/rgb/186/209/205' className='Colors'>Opal</NavLink>
          </li>
          <li>
            <NavLink to='/rgb/242/209/201' className='Colors'>Misty Rose</NavLink>
          </li>
          <li>
            <NavLink to='/rgb/224/134/211' className='Colors'>Violet Web</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
