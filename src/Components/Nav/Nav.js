import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='nav=bar'>
      <nav>
        <ul>
          <li>
            <Link to='/rgb/xxx/xxx/xx'>Color 1</Link>
          </li>
          <li>
            <Link to='/rgb/xxx/xxx/xx'>Color 2</Link>
          </li>
          <li>
            <Link to='/rgb/xxx/xxx/xx'>Color 3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}