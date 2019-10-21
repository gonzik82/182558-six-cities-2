import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocationsCity from './LocationsCity';


Enzyme.configure({adapter: new Adapter()});

it(`LocationsCity is correctly rendered after relaunch E2E test`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<LocationsCity name={`Paris`} isActive={true} onClick={clickHandler} />);
  const startButton = app.find(`a`);
  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
