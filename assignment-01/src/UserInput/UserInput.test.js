import { Input } from "semantic-ui-react";
import React from 'react';
import { shallow } from 'enzyme';
import UserInput from './UserInput';

describe('<UserInput />', () => {

    it('renders one <Input /> component', () => {
        const wrapper = shallow(<UserInput />);
        expect(wrapper.find(Input)).toHaveLength(1);
    });
});