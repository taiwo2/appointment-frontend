// import { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Home from '../../components/Home';

configure({adapter: new Adapter()});
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Home />,
    );
  });

  it('renders 2 location options', () => {
    expect(wrapper.find('option')).toHaveLength(2);
  });

  it('renders link to create appointment', () => {
    expect(wrapper.find('Link')).toHaveLength(1);
  });
});
