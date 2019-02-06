import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import EventList from './EventList';

import { findByTestAttr } from '../../../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = [
   {
      title:'Breakfast',
      id: 'meal1'
    },
    {
      title:'Lunch',
      id: 'meal2'
    }
  ];


const setup = (props=[]) => {
  const setupProps = [...defaultProps, ...props]
  return mount(<EventList list={setupProps} />)
}

test('renders without crashing', () => {
  const wrapper = setup();
  const eventList = findByTestAttr(wrapper, 'component-meal-list');
  expect(eventList.length).toBe(1);
})

test('renders correct amount of list items to page', () => {
  const wrapper = setup();
  const eventList = findByTestAttr(wrapper, 'meal-list-item');
  expect(eventList.length).toBe(defaultProps.length);
})
