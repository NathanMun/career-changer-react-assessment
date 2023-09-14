import React from 'react'
import Navbar from '../navbar/Navbar'
import './homenormal.css'

function Homenormal() {
  return (
    <div>
        <Navbar />
        <div className='homenormal'>
          <div>
            <h1>Generation Thailand <br />React - Assessment</h1>
          </div>
          <div className='btn'>
            <button><a href='homeuser'>User Home Sector</a></button>
            <button><a href='homeadmin'>Admin Home Sector</a></button>
          </div>
        </div>
    </div>
  )
}

export default Homenormal