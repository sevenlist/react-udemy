import { Input, Label } from 'semantic-ui-react';
import React from 'react';

const UserInput = props => {
    return (
        <Label>Username:
            <Input onChange={props.onChange} value={props.username}></Input>
        </Label>
    );
};

export default UserInput;