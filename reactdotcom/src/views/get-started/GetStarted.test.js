import React from 'react';
import { shallow} from 'enzyme';

import { GetStarted } from './GetStarted';

const setup = () => {
  return shallow(<GetStarted />)
}

test('render without errors', () => {
  const wrapper = setup();
  const background = wrapper.find("[data-test='background-component']");
  expect(background.length).toBe(1)
});