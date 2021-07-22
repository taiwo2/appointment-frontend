import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store'
import Appointments from '../../components/Appointments';

configure({adapter: new Adapter()});
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Appointments />
      </Provider>,
    );
  });


  it('renders link to create appointment', () => {
    let appointments;
    const header = (<div className="container text-center">
    <h3>Appointments</h3>
    <div className="d-flex flex-wrap">
      {appointments}
    </div>
    </div>);
    expect(wrapper.contains(header)).toBeDefined();
  });
  it('renders link to create appointment', () => {
    expect(wrapper.find('Link')).toBeTruthy();
  });
});