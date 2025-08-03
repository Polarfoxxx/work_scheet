import React from 'react';
import { NavLink } from 'react-router-dom';

function WhellLiveModule(): React.JSX.Element {
  return (
    <div>
      <h1>Whell Live Module</h1>
      <p>This module is currently under development.</p>
       <NavLink to={"/speedCut"} >
        <button className="btn btn-primary">Go to Whell Live</button>
      </NavLink>
    </div>
  );
}

export default WhellLiveModule;