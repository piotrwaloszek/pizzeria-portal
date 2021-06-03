import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

it('renders without crashing', () => {
  shallow(<App />);
});