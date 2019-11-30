import React from 'react';
import './UserOutput.css'

const UserOutput = props => (
    <div className="user-output">
        <p>Username: {props.username}</p>
        <p>Some text.</p>
    </div>
);

export default UserOutput;