import React from 'react';

const Person = (props) => (
    <div>
        <p onClick={() => props.onClick(props.id)}>I'm a person, my name is {props.name}, and I am {props.age} years old! I have the id {props.id}.</p>
        <p>{props.children}</p>
    </div>
);

export default Person;