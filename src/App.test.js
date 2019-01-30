import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

import { findByTestAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
  const div = shallow(<App />);
  const component = findByTestAttr(div, 'component-main-div');
  expect(component.length).toBe(1);
});
