import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ImageTallyItem from './ImageTallyItem';
import icon from '../../assets/water.svg';

import { findByTestAttr } from '../../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  icon: icon,
  id: 'icon-water-1',
  styleIcon: 'icon unselected'
};

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props }
  return mount(<ImageTallyItem {...setupProps}/>);
};

test('renders without crashing', () => {
  const wrapper = setup();
  const tallyItem = findByTestAttr(wrapper, 'component-tally-item');
  expect(tallyItem.length).toBe(1);
});

test('renders as unselected icon (greyscale)', () => {
  const wrapper = setup();
  const tallyItem = findByTestAttr(wrapper, 'component-tally-item');
  expect(tallyItem.hasClass('unselected')).toBe(true);
});

test('renders a selected icon (colour)', () => {
  const wrapper = setup({ styleIcon: 'icon' });
  const tallyItem = findByTestAttr(wrapper, 'component-tally-item');
  expect(tallyItem.hasClass('unselected')).toBe(false);
});
