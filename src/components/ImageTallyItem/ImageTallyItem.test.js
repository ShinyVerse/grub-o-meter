import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImageTallyItem from './ImageTallyItem';
import icon from '../../assets/water.svg';

import { findByTestAttr } from '../../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  icon: icon,
  id: 'icon-water-1',
  isSelected: false
};

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<ImageTallyItem {...setupProps}/>);
};

test('renders without crashing', () => {
  const wrapper = setup();
  const tallyItem = findByTestAttr(wrapper, 'component-tally-item');
  expect(tallyItem.length).toBe(1);
});

test('class to greyscale (unselected) icon when isSelected = false', () => {
  const wrapper = setup();
  const tallyItem = findByTestAttr(wrapper, 'component-tally-item');
  expect(tallyItem.hasClass('unselected')).toBe(true)
});

test('class unselected when isSelected false', () => {
  const wrapper = setup();
  const tallyItem = findByTestAttr(wrapper, 'component-tally-item');
  expect(tallyItem.hasClass('unselected')).toBe(true)
});

test('does not have unselected when isSelected true', () => {
  const wrapper = setup({isSelected: true});
  const tallyItem = findByTestAttr(wrapper, 'component-tally-item');
  expect(tallyItem.hasClass('unselected')).toBe(false)
});
