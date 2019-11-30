import { Input } from "semantic-ui-react";
import React from 'react';
import { shallow } from 'enzyme';
import UserInput from './UserInput';

describe('<UserInput />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<UserInput />);
    });

    it('renders one <Input /> component', () => {
        wrapper.setProps({ username: 'Ted'})
        expect(wrapper.find(Input)).toHaveLength(1);
        expect(wrapper.contains(<Input value='Ted' />)).toEqual(true);
    });
});