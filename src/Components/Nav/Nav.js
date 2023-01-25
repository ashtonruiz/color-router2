import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav=bar'>
      <nav>
        <ul>
          <li>
            <Link to='/rgb/186/209/205'>Color 1</Link>
          </li>
          <li>
            <Link to='/rgb/242/209/201'>Color 2</Link>
          </li>
          <li>
            <Link to='/rgb/224/134/211'>Color 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}