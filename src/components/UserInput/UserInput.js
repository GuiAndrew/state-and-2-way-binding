import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    const style = {
        backgroundColor: '#f2f2f2',
        padding: '6px',
        cursor: 'pointer'
    };

    return (
        <div>
        <input className="UserInput" style={style} type="text" onChange={ props.changed } value={ props.userName } />
        </div>
    );
}

export default userInput;