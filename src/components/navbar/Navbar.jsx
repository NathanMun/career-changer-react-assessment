import React from 'react'
import './navbar.css';


function Navbar() {
  return (
    <div>
        <div className='navbar'>
          <ul>
              <li><a href='http://localhost:5173/'>Home</a></li>
              <li><a href='http://localhost:5173/owner'>Owner</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar