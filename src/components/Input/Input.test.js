import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from './Input';

import { findByTestAttr } from '../../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { title: 'MealTimeTitle' }
//required title

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<Input {...setupProps}/>);
};

test('renders without crashing', () => {
  const wrapper = setup();
  const input = findByTestAttr(wrapper, 'component-input');
  expect(input.length).toBe(1);
});

test('correctly labels input field', () => {
  const wrapper = setup();
  const input = findByTestAttr(wrapper, 'label-event-title', 'className');
  expect(input.text()).toContain(defaultProps.title);
});

test('renders a field that a user can populate', () => {
  const wrapper = setup();
  const input = findByTestAttr(wrapper, 'form-user-input', 'className');
  expect(input.length).toBe(1);
});
