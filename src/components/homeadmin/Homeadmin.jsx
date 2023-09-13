import React from "react";
import Homenormal from "../homenormal/Homenormal";
import './homeadmin.css';
import '../homeuser/homeuser.css'

function Homeadmin() {
  return (
    <div>
      <Homenormal />
      <div className="homeadmin">
        <h3>Create User Here</h3>
        <div className='input'>
          <input
            type="text"
            placeholder="Type new name here"
            
          />
          <input
            type="text"
            placeholder="Type new organization here"
          
          />
          <input
            type="text"
            placeholder="Type new position here"
          
          />
          <button>Save</button>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Homeadmin;
