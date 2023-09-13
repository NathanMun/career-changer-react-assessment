import React from 'react'
import Homenormal from '../homenormal/Homenormal'
import '../homenormal/homenormal.css'
import './homeuser.css'

function Homeuser() {
  return (
    <div>
      <Homenormal />
      <div className='homenormal'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Organization</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>ABC Inc.</td>
              <td>Developer</td>
            </tr>
            <tr>
              <td>Jane</td>
              <td>XYZ Corp.</td>
              <td>Designer</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>123 LLC</td>
              <td>Manager</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Homeuser