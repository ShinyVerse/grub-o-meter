import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImageTallyContainer from './ImageTallyContainer';
import icon from '../../assets/water.svg';

import { findByTestAttr } from '../../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultState = {
  icon: icon,
  amount: 2
}

const setup = (state={}) => {
  const setupState = {...defaultState, ...state}
  return mount(<ImageTallyContainer {...setupState} />)
}

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-icon-tally');
  expect(component.length).toBe(1);
});

test('renders correct amount of icons to a page', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'tally-icon');
  expect(component.length).toBe(2);
})
