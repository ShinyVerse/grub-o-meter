import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MealList from './MealList';

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
  return shallow(<MealList list={setupProps} />)
}

test('renders without crashing', () => {
  const wrapper = setup();
  const mealList = findByTestAttr(wrapper, 'component-meal-list');
  expect(mealList.length).toBe(1);
})

test('renders correct amount of list items to page', () => {
  const wrapper = setup();
  const mealListItems = findByTestAttr(wrapper, 'meal-list-item');
  expect(mealListItems.length).toBe(defaultProps.length);
})
