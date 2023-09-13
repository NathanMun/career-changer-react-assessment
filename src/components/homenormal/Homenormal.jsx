import React from 'react'
import Navbar from '../navbar/Navbar'

function Homenormal() {
  return (
    <div className='navbar'>
        <Navbar />
        <div>
            <h1>Generation Thailand <br />React - Assessment</h1>
            <div>
                <button>User Home Sector</button>
                <button>Admin Home Sector</button>
            </div>
        </div>
    </div>
  )
}

export default Homenormal