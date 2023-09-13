import React from 'react'
import Homenormal from '../homenormal/Homenormal';

function Homeadmin() {
  return (
    <div>
      <Homenormal />
        <div className='homeadmin'>
            <h3>Create User Here</h3>
            <div>
              <input type="text" placeholder="Type new name here" style={{margin: '4px'}} />
              <input type="text" placeholder="Type new organization here" style={{margin: '4px'}} />
              <input type="text" placeholder="Type new position here" style={{margin: '4px'}} />
              <button style={{margin: '4px'}}>Save</button>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </table>
        </div>
    </div>
  );
};

export default Homeadmin;