import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.first}</p>
      <p onClick={props.click}>{props.second} <br /> {props.children}</p>
    </div>
  );
}

export default userOutput;