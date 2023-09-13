import React from 'react'
import Homenormal from '../homenormal/Homenormal'

function Homeuser() {
  return (
    <div className='homeuser'>
      <Homenormal />
        <table>
            <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Position</th>
            </tr>
        </table>
    </div>
  )
}

export default Homeuser