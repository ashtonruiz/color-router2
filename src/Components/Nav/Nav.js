import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav-bar'>
      <nav>
        <ul>
          <li>
            <Link to='/rgb/186/209/205'>Opal</Link>
          </li>
          <li>
            <Link to='/rgb/242/209/201'>Misty Rose</Link>
          </li>
          <li>
            <Link to='/rgb/224/134/211'>Violet Web</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}